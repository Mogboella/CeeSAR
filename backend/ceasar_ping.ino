// Blynk IDs
// Blynk Dashboard: https://blynk.cloud/dashboard/154260/global/devices/1/organization/154260/devices/505233/dashboard

#define BLYNK_TEMPLATE_ID "TMPL4pVH9mjIx" // unique template id from blynk
#define BLYNK_TEMPLATE_NAME "Byski" // template name shown in blynk
#define BLYNK_AUTH_TOKEN "R30Rs-fLVgfe4VxFSDO-wtobG9YiyLO-" // device auth token (keep secret)


// Print Blynk debug to Serial
#define BLYNK_PRINT Serial // tell blynk lib to log to serial monitor

// Libraries
#include <WiFi.h> // esp32 wifi functions
#include <WiFiClient.h> // tcp client used under the hood
#include <BlynkSimpleEsp32.h> // blynk client for esp32
#include "DHT.h" // dht11 sensor library
#include <Wire.h> // i2c bus for bme280
#include <Adafruit_Sensor.h> // adafruit sensor base types
#include <Adafruit_BME280.h> // bme280 driver (temp/hum/pressure)
#include <OneWire.h> // 1-wire bus for ds18b20
#include <DallasTemperature.h> // higher-level ds18b20 helper

// Wi-Fi
char ssid[] = "TEMPLEPLAY-2.4"; // your wifi network name
char pass[] = "playtemple24"; // your wifi password

// .......... DHT11 settings ..........
#define DHTPIN 4 // gpio pin where dht11 data is connected
#define DHTTYPE DHT11 // tell the lib we use a dht11
DHT dht(DHTPIN, DHTTYPE); // make a dht sensor object

// ...... BME280 settings ..........
Adafruit_BME280 bme; // create a bme280 object (i2c mode)
bool bme_ok = false; // will be set true if sensor is detected

// .......... DS18B20 settings ..........
#define DS_PIN 19 // 1-wire data pin for ds18b20
OneWire oneWire(DS_PIN); // low-level 1-wire bus on that pin
DallasTemperature ds(&oneWire); // ds18b20 helper using that bus

// .......... Ultrasonic Sensor (AJ-SR04) settings ..........
const int trigPin = 14;  // GPIO33 for Trigger
const int echoPin = 12;  // GPIO35 for Echo
// Note: Echo pin on GPIO35 is input-only, suitable for this setup.
//       Ensure power compatibility; level shifter may be needed for 5V echo if powering at 5V.

// .......... Blynk timer ..........
BlynkTimer timer; // non-blocking scheduler for periodic tasks

// .................... Helper: read DHT11 and send ....................
void sendFromDHT11() { // function to read dht11 and send to blynk
  float h = dht.readHumidity(); // read humidity in percent
  float t = dht.readTemperature(); // read temperature in celsius
  if (isnan(h) || isnan(t)) { // if either reading failed
    t = random(20, 26); // random room temperature
    h = random(40, 61); // random normal humidity
    Serial.println("[DHT11] read error - sending random values");
  }
  // Optional: heat index using DHT lib (in °C)
  float hi = dht.computeHeatIndex(t, h, false); // calculate “feels like” temp in celsius
  Serial.print("[DHT11] T="); // start debug line
  Serial.print(t); Serial.print(" °C, H="); // print temperature
  Serial.print(h); Serial.print(" %, HI="); // print humidity
  Serial.print(hi); Serial.println(" °C"); // print heat index and newline
  Blynk.virtualWrite(V0, t); // send temp to virtual pin V0
  Blynk.virtualWrite(V1, h); // send humidity to virtual pin V1
  Blynk.virtualWrite(V6, hi); // send heat index to virtual pin V6
}

// Helper: read BME280 and send
void sendFromBME280() { // function to read bme280 and send to blynk
  if (!bme_ok) { // if sensor not found, generate random
    float t = random(20, 26); // random room temperature
    float h = random(40, 61); // random normal humidity
    float p = random(1010, 1021); // random normal pressure in hPa
    Serial.print("[BME280] not found - sending random values: T=");
    Serial.print(t); Serial.print(" °C, H=");
    Serial.print(h); Serial.print(" %, P=");
    Serial.print(p); Serial.println(" hPa");
    Blynk.virtualWrite(V2, t); // send temp to V2
    Blynk.virtualWrite(V3, h); // send humidity to V3
    Blynk.virtualWrite(V4, p); // send pressure to V4
    return;
  }
  float t = bme.readTemperature(); // read bme temp in celsius
  float h = bme.readHumidity(); // read bme humidity in percent
  float p = bme.readPressure() / 100.0F; // read pressure in pa, convert to hPa
  // BME library returns NAN if something goes wrong
  if (isnan(t)) {
    t = random(20, 26); // random room temperature
    Serial.println("[BME280] temperature read error - sending random value");
  }
  if (isnan(h)) {
    h = random(40, 61); // random normal humidity
    Serial.println("[BME280] humidity read error - sending random value");
  }
  if (isnan(p)) {
    p = random(1010, 1021); // random normal pressure in hPa
    Serial.println("[BME280] pressure read error - sending random value");
  }
  Serial.print("[BME280] T="); // start debug line
  Serial.print(t); Serial.print(" °C, H="); // print temperature
  Serial.print(h); Serial.print(" %, P="); // print humidity
  Serial.print(p); Serial.println(" hPa"); // print pressure and newline
  Blynk.virtualWrite(V2, t); // send temp to V2
  Blynk.virtualWrite(V3, h); // send humidity to V3
  Blynk.virtualWrite(V4, p); // send pressure to V4
}

// .................... Helper: read DS18B20 and send ....................
void sendFromDS18B20() { // function to read ds18b20 and send to blynk
  ds.requestTemperatures(); // ask all sensors on the bus to measure
  float t = ds.getTempCByIndex(0); // read first sensor’s temperature in celsius
  if (t == DEVICE_DISCONNECTED_C) { // check if sensor is disconnected
    t = random(20, 26); // random room temperature
    Serial.println("[DS18B20] read error (disconnected?) - sending random value");
  }
  Serial.print("[DS18B20] T="); // start debug line
  Serial.print(t); Serial.println(" °C"); // print temperature and newline
  Blynk.virtualWrite(V5, t); // send ds18b20 temp to V5
}

// .................... Helper: read Ultrasonic Sensor and send ....................
void sendFromUltrasonic() { // function to read ultrasonic and send to blynk
  // Ensure trigger is low
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  // Send 10us trigger pulse
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Measure echo pulse duration
  long duration = pulseIn(echoPin, HIGH, 30000);  // Timeout after 30ms (~5m max range)
  
  // Calculate distance in cm (speed of sound ~343 m/s or 0.034 cm/us)
  float distance = (duration * 0.034) / 2;
  
  // Check for invalid reading
  if (duration == 0 || distance < 2 || distance > 400) {  // Invalid if no pulse or out of reasonable range
    distance = random(10, 91);  // Random distance in 10-90 cm range
    Serial.println("[Ultrasonic] read error - sending random value");
  }
  
  // Output the level (distance from sensor)
  Serial.print("[Ultrasonic] Level Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  // Send to Blynk virtual pin V7
  Blynk.virtualWrite(V7, distance);
}

// Combine: read all sensors
void sendAllSensors() { // function that calls all four readers
  sendFromDHT11(); // read + send dht11
  sendFromBME280(); // read + send bme280 (if present)
  sendFromDS18B20(); // read + send ds18b20
  sendFromUltrasonic(); // read + send ultrasonic
}

// setup
void setup() { // runs once on boot
  Serial.begin(115200); // open serial at 115200 baud
  delay(500); // short delay so serial is ready

  // Ultrasonic
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.println("Ultrasonic Sensor Level Check Started");

  // DHT11
  dht.begin(); // start the dht11 sensor

  // I2C + BME280
  Wire.begin(21, 22); // set i2c pins: sda=21, scl=22 on esp32
  Wire.setClock(100000); // set i2c speed to 100 kHz
  Serial.println("\nLooking for BME280..."); // message so we know we’re probing
  bme_ok = bme.begin(0x76); // try address 0x76 first
  if (!bme_ok) bme_ok = bme.begin(0x77); // if not found, try 0x77
  if (bme_ok) { // if detected
    Serial.println("BME280 found."); // confirm on serial
  } else { // otherwise
    Serial.println("BME280 NOT found at 0x76/0x77 (will send random for BME readings)."); // warn user
  }

  // DS18B20
  pinMode(DS_PIN, INPUT_PULLUP); // enable weak pull-up on data pin
  ds.begin(); // start dallas temperature library
  Serial.print("DS18B20 devices found: "); // label for device count
  Serial.println(ds.getDeviceCount()); // print how many sensors are on the bus

  // Blynk
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass); // connect to wifi and blynk cloud (blocking)

  // Timer: read and send every 2 seconds
  timer.setInterval(2000L, sendAllSensors); // schedule sensor reads every 2000 ms
}

// loop
void loop() { // runs over and over
  Blynk.run(); // keep blynk connection serviced
  timer.run(); // run any due scheduled functions

  delay(60000);
}
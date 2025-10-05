export interface RiverYearData {
    year: number;
    floodExtentKm2: number;
    avgWaterLevelM: number;
    peakWaterLevelM: number;
    rainfallAnomalyPct: number;
    image: string;
    summary: string;
}

export const RIVER_YEARS: RiverYearData[] = [

    {
        year: 2015,
        floodExtentKm2: 190.0,
        avgWaterLevelM: 38.10,
        peakWaterLevelM: 39.85,
        rainfallAnomalyPct: 22,
        image: "https://mapping.emergency.copernicus.eu/activations/EMSR149/",
        summary: "Severe winter flooding (sim.); prolonged high stages along callows; minor embankment overtopping in spots."
    },
    {
        year: 2016,
        floodExtentKm2: 110.0,
        avgWaterLevelM: 37.85,
        peakWaterLevelM: 39.10,
        rainfallAnomalyPct: 9,
        image: "https://mapping.emergency.copernicus.eu/activations/EMSR149/",
        summary: "Recession from the 2015/16 event (sim.); high water persists into early year; nuisance road impacts."
    },
    {
        year: 2017,
        floodExtentKm2: 35.0,
        avgWaterLevelM: 37.45,
        peakWaterLevelM: 38.40,
        rainfallAnomalyPct: -4,
        image: "",
        summary: "Typical seasonal variability (sim.); brief high stages but limited flood footprint."
    },
    {
        year: 2018,
        floodExtentKm2: 10.0,
        avgWaterLevelM: 37.20,
        peakWaterLevelM: 37.95,
        rainfallAnomalyPct: -18,
        image: "",
        summary: "Dry year signal (sim.); below-average stages; minimal floodplain activation."
    },
    {
        year: 2019,
        floodExtentKm2: 45.0,
        avgWaterLevelM: 37.60,
        peakWaterLevelM: 38.75,
        rainfallAnomalyPct: 6,
        image: "",
        summary: "Wet late autumn (sim.); moderate out-of-bank flow in low-lying sections."
    },
    {
        year: 2020,
        floodExtentKm2: 75.0,
        avgWaterLevelM: 37.70,
        peakWaterLevelM: 39.00,
        rainfallAnomalyPct: 8,
        image: "",
        summary: "Notable winter peak (sim.); sporadic road closures and pumping operations."
    },
    {
        year: 2021,
        floodExtentKm2: 30.0,
        avgWaterLevelM: 37.50,
        peakWaterLevelM: 38.30,
        rainfallAnomalyPct: -3,
        image: "",
        summary: "Close to average (sim.); short-lived high stages, limited impacts."
    },
    {
        year: 2022,
        floodExtentKm2: 25.0,
        avgWaterLevelM: 37.40,
        peakWaterLevelM: 38.20,
        rainfallAnomalyPct: -5,
        image: "",
        summary: "Slightly drier than average (sim.); low floodplain activation."
    },
    {
        year: 2023,
        floodExtentKm2: 210.0,
        avgWaterLevelM: 38.20,
        peakWaterLevelM: 40.10,
        rainfallAnomalyPct: 25,
        image: "",
        summary: "Exceptionally wet (sim.); multiple peaks and extensive callow inundation; minor infrastructure stress testing."
    },
    {
        year: 2024,
        floodExtentKm2: 120.0,
        avgWaterLevelM: 37.90,
        peakWaterLevelM: 39.40,
        rainfallAnomalyPct: 12,
        image: "",
        summary: "Another wet year (sim.); elevated baseline stages; recurrent out-of-bank episodes."
    },
    {
        year: 2025,
        floodExtentKm2: 40.0,
        avgWaterLevelM: 37.65,
        peakWaterLevelM: 38.70,
        rainfallAnomalyPct: 3,
        image: "",
        summary: "Near-average conditions (sim.); brief high flows with localized impacts."
    }
];

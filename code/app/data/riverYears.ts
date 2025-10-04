export interface RiverYearData {
    year: number;
    floodExtentKm2: number; // approximate flooded surface area
    avgWaterLevelM: number; // average water level (meters)
    peakWaterLevelM: number; // peak water level
    rainfallAnomalyPct: number; // relative to baseline
    image: string; // placeholder path or remote URL
    summary: string;
}

// Placeholder synthetic dataset; replace metrics with real processed outputs.
export const RIVER_YEARS: RiverYearData[] = [
    {
        year: 2015,
        floodExtentKm2: 160.5,
        avgWaterLevelM: 2.4,
        peakWaterLevelM: 4.0,
        rainfallAnomalyPct: 20,
        image: "/images/river/2015.jpg",
        summary: "Severe flooding event; extensive farmland and infrastructure impacts.",
    },
    {
        year: 2016,
        floodExtentKm2: 112.4,
        avgWaterLevelM: 2.1,
        peakWaterLevelM: 3.4,
        rainfallAnomalyPct: 8,
        image: "/images/river/2016.jpg",
        summary: "Mild winter flooding; localized farmland impacts near Shannon Callows.",
    },
    {
        year: 2017,
        floodExtentKm2: 150.2,
        avgWaterLevelM: 2.3,
        peakWaterLevelM: 3.9,
        rainfallAnomalyPct: 15,
        image: "/images/river/2017.jpg",
        summary: "Prolonged rainfall created extended saturation; moderate navigation delays.",
    },
    {
        year: 2018,
        floodExtentKm2: 98.6,
        avgWaterLevelM: 1.9,
        peakWaterLevelM: 2.8,
        rainfallAnomalyPct: -12,
        image: "/images/river/2018.jpg",
        summary: "Drier conditions; reduced floodplain coverage and lower sediment transport.",
    },
    {
        year: 2019,
        floodExtentKm2: 134.9,
        avgWaterLevelM: 2.2,
        peakWaterLevelM: 3.2,
        rainfallAnomalyPct: 5,
        image: "/images/river/2019.jpg",
        summary: "Near-average hydrological behavior with early spring crest.",
    },
    {
        year: 2020,
        floodExtentKm2: 175.1,
        avgWaterLevelM: 2.5,
        peakWaterLevelM: 4.1,
        rainfallAnomalyPct: 21,
        image: "/images/river/2020.jpg",
        summary: "Significant winter floods; access disruptions and higher erosion hotspots.",
    },
    {
        year: 2021,
        floodExtentKm2: 142.7,
        avgWaterLevelM: 2.2,
        peakWaterLevelM: 3.5,
        rainfallAnomalyPct: 9,
        image: "/images/river/2021.jpg",
        summary: "Moderate seasonal inundation; riparian restoration zones effective.",
    },
    {
        year: 2022,
        floodExtentKm2: 120.3,
        avgWaterLevelM: 2.0,
        peakWaterLevelM: 3.1,
        rainfallAnomalyPct: -4,
        image: "/images/river/2022.jpg",
        summary: "Slightly below average extent; improved early warning accuracy.",
    },
    {
        year: 2023,
        floodExtentKm2: 163.8,
        avgWaterLevelM: 2.4,
        peakWaterLevelM: 3.8,
        rainfallAnomalyPct: 13,
        image: "/images/river/2023.jpg",
        summary: "Elevated late autumn discharge; higher turbidity in lower reaches.",
    },
    {
        year: 2024,
        floodExtentKm2: 181.5,
        avgWaterLevelM: 2.6,
        peakWaterLevelM: 4.3,
        rainfallAnomalyPct: 25,
        image: "/images/river/2024.jpg",
        summary: "Notable peak overtopping minor embankments; infrastructure stress tests triggered.",
    },
    {
        year: 2025,
        floodExtentKm2: 169.2,
        avgWaterLevelM: 2.5,
        peakWaterLevelM: 4.0,
        rainfallAnomalyPct: 18,
        image: "/images/river/2025.jpg",
        summary: "Sustained high stages; model recalibration improved inundation mapping latency.",
    },
];

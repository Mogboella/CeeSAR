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
        floodExtentKm2: 160.5,
        avgWaterLevelM: 2.4,
        peakWaterLevelM: 4.0,
        rainfallAnomalyPct: 20,
        image: "https://res.cloudinary.com/dgdsc8fxf/video/upload/v1759613171/SAR_2015_dm0qjs.mp4",
        summary: "Severe flooding event; extensive farmland and infrastructure impacts.",
    },
    {
        year: 2016,
        floodExtentKm2: 112.4,
        avgWaterLevelM: 2.1,
        peakWaterLevelM: 3.4,
        rainfallAnomalyPct: 8,
        image: "/public/maps/2016_lowres.png",
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
    }
];
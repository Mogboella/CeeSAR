export interface RiverYearData {
    year: number;
    floodExtentKm2: number;
    avgWaterLevelM: number;
    peakWaterLevelM: number;
    rainfallAnomalyPct: number;
    image: string;
    zoomImage: string;
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
        zoomImage: "https://res.cloudinary.com/dgdsc8fxf/image/upload/v1759600886/maps/Period_1_2015_01_map.png"
    },
    {
        year: 2016,
        floodExtentKm2: 112.4,
        avgWaterLevelM: 2.1,
        peakWaterLevelM: 3.4,
        rainfallAnomalyPct: 8,
        image: "https://res.cloudinary.com/dgdsc8fxf/video/upload/v1759613170/SAR_2016_loxgdr.mp4",
        summary: "Mild winter flooding; localized farmland impacts near Shannon Callows.",
        zoomImage: "https://res.cloudinary.com/dgdsc8fxf/image/upload/v1759601998/maps/Period_12_2016_06_map.png"
    },
    {
        year: 2017,
        floodExtentKm2: 150.2,
        avgWaterLevelM: 2.3,
        peakWaterLevelM: 3.9,
        rainfallAnomalyPct: 15,
        image: "https://res.cloudinary.com/dgdsc8fxf/video/upload/v1759613169/SAR_2017_oigswn.mp4",
        summary: "Prolonged rainfall created extended saturation; moderate navigation delays.",
        zoomImage: "https://res.cloudinary.com/dgdsc8fxf/image/upload/v1759602088/maps/Period_9_2017_05_map.png"
    },
    {
        year: 2018,
        floodExtentKm2: 98.6,
        avgWaterLevelM: 1.9,
        peakWaterLevelM: 2.8,
        rainfallAnomalyPct: -12,
        image: "https://res.cloudinary.com/dgdsc8fxf/video/upload/v1759613169/SAR_2018_ey5x1i.mp4",
        summary: "Drier conditions; reduced floodplain coverage and lower sediment transport.",
        zoomImage: ""
    },
    {
        year: 2019,
        floodExtentKm2: 134.9,
        avgWaterLevelM: 2.2,
        peakWaterLevelM: 3.2,
        rainfallAnomalyPct: 5,
        image: "https://res.cloudinary.com/dgdsc8fxf/video/upload/v1759613170/SAR_2019_pllxw6.mp4",
        summary: "Near-average hydrological behavior with early spring crest.",
        zoomImage: ""
    },
    {
        year: 2020,
        floodExtentKm2: 175.1,
        avgWaterLevelM: 2.5,
        peakWaterLevelM: 4.1,
        rainfallAnomalyPct: 21,
        image: "https://res.cloudinary.com/dgdsc8fxf/video/upload/v1759613171/SAR_2020_tp0gj3.mp4",
        summary: "Significant winter floods; access disruptions and higher erosion hotspots.",
        zoomImage: ""
    },
    {
        year: 2021,
        floodExtentKm2: 0,
        avgWaterLevelM: 0,
        peakWaterLevelM: 0,
        rainfallAnomalyPct: 0,
        image: "",
        summary: "Data Coming Soon",
        zoomImage: ""
    },
    {
        year: 2022,
        floodExtentKm2: 0,
        avgWaterLevelM: 0,
        peakWaterLevelM: 0,
        rainfallAnomalyPct: 0,
        image: "",
        summary: "Data Coming Soon",
        zoomImage: ""
    },
    {
        year: 2023,
        floodExtentKm2: 0,
        avgWaterLevelM: 0,
        peakWaterLevelM: 0,
        rainfallAnomalyPct: 0,
        image: "",
        summary: "Data Coming Soon",
        zoomImage: ""
    },
    {
        year: 2024,
        floodExtentKm2: 0,
        avgWaterLevelM: 0,
        peakWaterLevelM: 0,
        rainfallAnomalyPct: 0,
        image: "",
        summary: "Data Coming Soon",
        zoomImage: ""
    }
];
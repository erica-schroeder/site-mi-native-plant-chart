export type SoilMoisture = "dry" | "med" | "wet";
export type SunLevel = "full" | "part" | "shade";
export type PlantType = "forb" | "grass" | "sedge" | "shrub" | "tree";

export type Plant = {
    id: string;
    commonName: string;
    scientificName: string;
    plantType: PlantType;
    sun: SunLevel[];
    soilMoisture: SoilMoisture[];
    heightFt: {
        min: number;
        max: number;
    };
    widthFt: {
        min: number;
        max: number;
    };
    svg?: string;
};
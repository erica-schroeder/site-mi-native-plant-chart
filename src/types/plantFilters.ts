import type { Color, SoilMoisture, SunLevel } from "./plant";

export type PlantFilters = {
  searchQuery?: string;
  flowerColors?: Color[];
  heightRange?: [number, number];
  sunLevels?: SunLevel[];
  soilMoistures?: SoilMoisture[];
};

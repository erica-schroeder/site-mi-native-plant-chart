import type { Plant } from "./plant";

export type ChartFilterState = {
  filteredPlants: Plant[];
  showMinMax: boolean;

  setFilteredPlants: (v: Plant[]) => void;
  setShowMinMax: (v: boolean) => void;
};

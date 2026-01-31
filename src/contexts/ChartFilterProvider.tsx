import { plantsWithAverages } from "@/data/plants";
import type { ChartFilterState } from "@/types/chartFilterState";
import { createContext, type ReactNode, useContext, useState } from "react";

const ChartFilterContext = createContext<ChartFilterState | null>(null);

export const ChartFilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filteredPlants, setFilteredPlants] = useState(plantsWithAverages);
  const [showMinMax, setShowMinMax] = useState(true);

  const value = {
    filteredPlants,
    showMinMax,
    setFilteredPlants,
    setShowMinMax,
  };

  return (
    <ChartFilterContext.Provider value={value}>
      {children}
    </ChartFilterContext.Provider>
  );
};


export const useChartFilter = () => {
  const ctx = useContext(ChartFilterContext);
  if (!ctx) throw new Error('useChartFilter must be used inside a ChartFilterContext.');
  return ctx;
};

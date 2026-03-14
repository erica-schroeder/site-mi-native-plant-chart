import { plantsWithAverages } from "@/data/plants";
import type { BloomMonth, Color, Plant, SoilMoisture, SunLevel } from "@/types/plant";
import type { PlantFilters, Trait } from "@/types/plantFilters";
import Fuse from "fuse.js";
import { debounce, isEqual } from "lodash-es";
import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";

const PlantFilterContext = createContext(null);

const emptyFilters = {
    searchQuery: '',
    flowerColors: [],
    heightRange: [0, 10],
    sunLevels: [],
    soilMoistures: [],
    traits: [],
    caterpillars: [],
    bloomMonths: [],
};

export const PlantFilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>(plantsWithAverages);
  const [filters, setFilters] = useState<PlantFilters>(emptyFilters);
  const [pendingFilters, setPendingFilters] = useState<PlantFilters>(emptyFilters);

  const debouncedSetFilters = useCallback(
    debounce((newFilters: PlantFilters) => {
      setFilters(newFilters);
    }, 200),
    []
  );

  // Update pending filters instantly, debounce the actual filter update
  const updateFilters = (partial: Partial<PlantFilters>) => {
    const newFilters = { ...pendingFilters, ...partial };
    setPendingFilters(newFilters);
    debouncedSetFilters(newFilters);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  // Fuse initialized once per plant list
  const fuse = useMemo(() => {
    return new Fuse(plantsWithAverages, {
      keys: ['commonName', 'scientificName', 'otherNames'],
      threshold: 0.3,
      ignoreLocation: true,
    });
  }, [plantsWithAverages]);


  const applyFilters = () => {
    let result = plantsWithAverages;

    // Name-based search
    if (filters.searchQuery) {
      result = fuse.search(filters.searchQuery).map(r => r.item);
    }

    // Flower color filter
    if (filters.flowerColors.length > 0) {
      result = result.filter(p =>
        p.flowerColor?.some(c =>
          filters.flowerColors.includes(c)
        )
      );
    }

    // Bloom month filter
    if (filters.bloomMonths.length > 0) {
      result = result.filter(p =>
        p.bloomMonths?.some(m =>
          filters.bloomMonths.includes(m)
        )
      );
    }

    // Sun filter
    if (filters.sunLevels?.length > 0) {
      result = result.filter(p =>
        p.sun?.some(c =>
          filters.sunLevels.includes(c)
        )
      );
    }

    // Soil moisture filter
    if (filters.soilMoistures?.length > 0) {
      result = result.filter(p =>
        p.soilMoisture?.some(c =>
          filters.soilMoistures.includes(c)
        )
      );
    }

    // Height range filter
    if (filters.heightRange) {
      const [min, max] = filters.heightRange;
      result = result.filter(p =>
        p.heightFt.max >= min && p.heightFt.min <= max
      );
    }

    // Traits filter
    if (filters.traits?.length > 0) {
      result = result.filter(p =>
        filters.traits.every(trait => p.traits?.[trait])
      );
    }

    // Caterpillar filter
    if (filters.caterpillars?.length > 0) {
      result = result.filter(p =>
        p.hostCaterpillars?.some(c =>
          filters.caterpillars.includes(c)
        )
      );
    }

    setFilteredPlants(result);
  };

  const clearFilters = () => {
    setFilteredPlants(plantsWithAverages);
    setFilters(emptyFilters);
    setPendingFilters(emptyFilters);
  };

  const value = {
    filters: pendingFilters,
    applyFilters,
    clearFilters,
    setSearchQuery: (searchQuery: string) => updateFilters({ searchQuery }),
    setFlowerColors: (flowerColors: Color[]) => updateFilters({ flowerColors }),
    setBloomMonths: (bloomMonths: BloomMonth[]) => updateFilters({ bloomMonths }),
    setSunLevels: (sunLevels: SunLevel[]) => updateFilters({ sunLevels }),
    setSoilMoistures: (soilMoistures: SoilMoisture[]) => updateFilters({ soilMoistures }),
    setHeightRange: (heightRange: [number, number]) => updateFilters({ heightRange }),
    setTraits: (traits: Trait[]) => updateFilters({ traits }),
    setCaterpillars: (caterpillars: string[]) => updateFilters({ caterpillars }),
    filteredPlants,
    areFiltersEmpty: () => isEqual(pendingFilters, emptyFilters),
  };

  return (
    <PlantFilterContext.Provider value={value}>
      {children}
    </PlantFilterContext.Provider>
  );
};


export const usePlantFilter = () => {
  const ctx = useContext(PlantFilterContext);
  if (!ctx) throw new Error('usePlantFilter must be used inside a PlantFilter context provider.');
  return ctx;
};

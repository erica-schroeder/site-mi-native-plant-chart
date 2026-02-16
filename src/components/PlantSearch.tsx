import { useChartFilter } from '@/contexts/ChartFilterProvider';
import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { FlowerColorSelect } from './filter/FlowerColorSelect';
import { HeightRangeSlider } from './filter/HeightRangeSlider';
import { SunLevelSelect } from './filter/SunLevelSelect';
import { SoilMoistureSelect } from './filter/SoilMoistureSelect';


export const PlantSearch: React.FC = () => {
  const { filters, applyFilters, clearFilters, setSearchQuery, setFlowerColors, setHeightRange, setSunLevels, setSoilMoistures } = useChartFilter();

  return (
    <Stack spacing={0} alignItems={"center"}>
      <Stack direction="row" spacing={4} alignItems="center" flexWrap="wrap" sx={{ pb: 2}}>
        <TextField
          label="Common/scientific name contains"
          value={filters.searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ minWidth: "40ch" }}
        />

        <FlowerColorSelect
          onChange={setFlowerColors}
          value={filters.flowerColors}
        />

        <HeightRangeSlider
          onChange={setHeightRange}
          value={filters.heightRange}
        />

        <SunLevelSelect
          onChange={setSunLevels}
          value={filters.sunLevels}
        />

        <SoilMoistureSelect
          onChange={setSoilMoistures}
          value={filters.soilMoistures}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          disableElevation
          onClick={applyFilters}
          fullWidth={false}
        >
          Search
        </Button>

        <Button
          variant="outlined"
          onClick={clearFilters}
          fullWidth={false}
        >
          Clear
        </Button>
      </Stack>
    </Stack>
  );
};

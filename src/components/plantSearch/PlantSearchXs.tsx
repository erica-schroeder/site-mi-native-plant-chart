import { usePlantFilter } from '@/contexts/PlantFilterProvider';
import { Button, FormControl, FormLabel, Stack } from '@mui/material';
import React from 'react';
import { FlowerColorSelect } from '../filter/FlowerColorSelect';
import { HeightRangeSlider } from '../filter/HeightRangeSlider';
import { PlantNameSearch } from '../filter/PlantNameSearch';
import { SoilMoistureSelect } from '../filter/SoilMoistureSelect';
import { SunLevelSelect } from '../filter/SunLevelSelect';

const Label = (props) =>
  <FormLabel
    sx={{ fontSize: 12 }}
    {...props}
  />

export const PlantSearchXs: React.FC = () => {
  const { clearFilters } = usePlantFilter();

  return (
    <Stack spacing={2} alignItems={"stretch"} sx={{ maxWidth: 800 }}>
      <FormControl>
        <Label>
          Common or Scientific Name
        </Label>
        <PlantNameSearch
  InputProps={{
    sx: {
      height: 36,
      fontSize: 12,
    },
  }}
        />
      </FormControl>

      <FormControl sx={{ minWidth: 200, pr: 1 }}>
        <Label>
          Height range (feet)
        </Label>
        <HeightRangeSlider />
      </FormControl>

      <FormControl >
        <Label>
          Flower Colors
        </Label>
        <FlowerColorSelect size="small" />
      </FormControl>

      <Stack direction="row" spacing={5} alignItems="center" justifyContent="center">
        <FormControl>
          <Label>
            Sun Level
          </Label>
          <SunLevelSelect size="small" />
        </FormControl>

        <FormControl>
          <Label>
            Soil Moisture
          </Label>
          <SoilMoistureSelect size="small" />
        </FormControl>
      </Stack>

      <Stack direction="row" justifyContent="center" sx={{ pt: 2 }}>
        <Button
          variant="contained"
          onClick={clearFilters}
          fullWidth={false}
          size="small"
        >
          Clear Filters
        </Button>
      </Stack>
    </Stack>
  );
};

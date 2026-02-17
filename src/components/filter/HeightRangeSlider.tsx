import { Slider } from '@mui/material';

const MIN_HEIGHT = 0;
const MAX_HEIGHT = 10;

const marks = Array.from({ length: MAX_HEIGHT - MIN_HEIGHT + 1 }, (_, i) => ({
  value: i + MIN_HEIGHT,
  label: `${i + MIN_HEIGHT}′`,
}));

export function HeightRangeSlider({ value, onChange }) {
  const handleChange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      onChange([newValue[0], newValue[1]]);
    }
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      min={MIN_HEIGHT}
      max={MAX_HEIGHT}
      step={1}
      marks={marks}
      size="small"
    />
  );
}

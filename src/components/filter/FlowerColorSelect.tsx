import { usePlantFilter } from '@/contexts/PlantFilterContext';
import { iconMap } from '@/theme/icons';
import { ToggleButtonFilter } from './ToggleButtonFilter';
import { FormControl } from '@mui/material';
import { FilterLabel } from './FilterLabel';

const options = [{
    value: 'red',
    tooltip: 'Red',
    icon: iconMap.flowerColor.red,
}, {
    value: 'orange',
    tooltip: 'Orange',
    icon: iconMap.flowerColor.orange,
}, {
    value: 'yellow',
    tooltip: 'Yellow',
    icon: iconMap.flowerColor.yellow,
}, {
    value: 'green',
    tooltip: 'Green',
    icon: iconMap.flowerColor.green,
}, {
    value: 'blue',
    tooltip: 'Blue',
    icon: iconMap.flowerColor.blue,
}, {
    value: 'purple',
    tooltip: 'Purple',
    icon: iconMap.flowerColor.purple,
}, {
    value: 'pink',
    tooltip: 'Pink',
    icon: iconMap.flowerColor.pink,
}, {
    value: 'white',
    tooltip: 'White',
    icon: iconMap.flowerColor.white,
}];

export function FlowerColorSelect({ size, ...props }) {
    const { filters, setFlowerColors } = usePlantFilter();

    return (
        <FormControl>
            <FilterLabel size={size}>
                Flower Colors
            </FilterLabel>
            <ToggleButtonFilter
                options={options}
                value={filters.flowerColors}
                onChange={(_, value) => setFlowerColors(value)}
                size={size}
                {...props}
            />
        </FormControl>
    );
};

import { usePlantFilter } from "@/contexts/PlantFilterContext";
import { iconMap } from "@/theme/icons";
import { FormControl } from "@mui/material";
import { FilterLabel } from "./FilterLabel";
import { ToggleButtonFilter } from "./ToggleButtonFilter";

const options = [{
    value: "full",
    tooltip: "Full sun",
    icon: iconMap.sun.full,
}, {
    value: "part",
    tooltip: "Part sun",
    icon: iconMap.sun.part,
}, {
    value: "shade",
    tooltip: "Shade",
    icon: iconMap.sun.shade,
}];

export const SunLevelSelect = ({ size, ...props }) => {
    const { filters, setSunLevels } = usePlantFilter();

    return (
        <FormControl>
            <FilterLabel size={size}>
                Sun Level
            </FilterLabel>
            <ToggleButtonFilter
                options={options}
                value={filters.sunLevels}
                onChange={(_, value) => setSunLevels(value)}
                size={size}
                {...props}
            />
        </FormControl>
    );
};
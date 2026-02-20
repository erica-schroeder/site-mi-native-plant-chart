import { usePlantFilter } from "@/contexts/PlantFilterProvider";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";

export const SoilMoistureSelect = ({ ...props }) => {
  const { filters, setSoilMoistures } = usePlantFilter();

    return (
        <ToggleButtonGroup
            value={filters.soilMoistures}
            onChange={(_, value) => setSoilMoistures(value)}
            {...props}
        >
            <ToggleButton value="wet">
                <Tooltip title="Wet soil">
                    <img src="icons/wet-soil-icon.svg" width={30} height={20} />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="med">
                <Tooltip title="Medium soil">
                    <img src="icons/med-soil-icon.svg" width={30} height={20} />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="dry">
                <Tooltip title="Dry soil">
                    <img src="icons/dry-soil-icon.svg" width={30} height={20} />
                </Tooltip>
            </ToggleButton>

        </ToggleButtonGroup>
    );
};
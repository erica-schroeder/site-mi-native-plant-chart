import { usePlantFilter } from "@/contexts/PlantFilterProvider";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";

export const SunLevelSelect = ({ ...props }) => {
  const { filters, setSunLevels } = usePlantFilter();

    return (
        <ToggleButtonGroup
            value={filters.sunLevels}
            onChange={(_, value) => setSunLevels(value)}
            {...props}
        >
            <ToggleButton value="full">
                <Tooltip title="Full sun">
                    <img src="icons/full-sun-icon.svg" width={30} height={20} style={{ transform: "scale(1.2)", display: "block" }} />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="part">
                <Tooltip title="Part sun">
                    <img src="icons/part-sun-icon.svg" width={30} height={20} style={{ transform: "scale(1.2)", display: "block" }} />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="shade">
                <Tooltip title="Shade">
                    <img src="icons/shade-sun-icon.svg" width={30} height={20} style={{ transform: "scale(1.2)", display: "block" }} />
                </Tooltip>
            </ToggleButton>

        </ToggleButtonGroup>
    );
};
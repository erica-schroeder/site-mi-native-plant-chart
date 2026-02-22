import { FormLabel, Stack } from "@mui/material";
import InfoIcon from '@mui/icons-material/HelpOutline';

const sizeConfig = {
    xs: {
        fontSize: 12,
    },
    md: {
        fontSize: 14,
    },
    lg: {
        fontSize: 16,
    }
};

export const FilterLabel = ({ size, showInfoIcon, onInfoIconClicked, ...props }) => {
    const config = sizeConfig[size ?? "lg"];

    return (
        <Stack direction="row" spacing={.5} alignItems="center">
            <FormLabel sx={{ fontSize: config?.fontSize }} {...props} />
            {showInfoIcon &&
                <InfoIcon
                    onClick={onInfoIconClicked}
                    sx={{
                        cursor: "pointer",
                        color: "text.secondary",
                        fontSize: config.fontSize + 1,
                    }}
                />
            }
        </Stack>
    );
};
import { Stack, Typography } from "@mui/material";
import { DetailField } from "./DetailField";
import { HostPlantInfo } from "./HostPlantInfo";
import { SunSoilRequirements } from "./SunSoilRequirements";

const formatFt = (ft: number) => {
    if (ft < 1) return `${Math.round(ft * 12)}"`;
    return `${ft}'`;
};

export const PlantCharacteristics = ({ plant }) => {
    return (
        <Stack spacing={1}>
            <DetailField label="Conditions">
                <SunSoilRequirements plant={plant} />
            </DetailField>

            <DetailField label="Height">
                <Typography>
                    {formatFt(plant.heightFt.min)} - {formatFt(plant.heightFt.max)}
                </Typography>
            </DetailField>

            <DetailField label="Spread">
                <Typography>
                    {formatFt(plant.widthFt.min)} - {formatFt(plant.widthFt.max)}
                </Typography>
            </DetailField>

            <DetailField label="Bloom">
                <Typography sx={{ textTransform: "capitalize" }}>
                    {plant.bloomMonths.join(", ")}
                </Typography>
            </DetailField>

            {plant.hostCaterpillars?.length > 0 &&
                <DetailField label="Hosts">
                    <HostPlantInfo plant={plant} />
                </DetailField>
            }
        </Stack>
    );
}
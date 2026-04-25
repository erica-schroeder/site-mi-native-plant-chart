import { PlantChartMui } from "@/components/chart/PlantChartMui";
import { usePinnedPlants } from "@/contexts/PinnedPlantsContext";
import { plantsWithAverages } from "@/data/plants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PushPinIcon from "@mui/icons-material/PushPin";
import ClearIcon from "@mui/icons-material/Clear";
import { Accordion, AccordionDetails, AccordionSummary, Chip, IconButton, Tooltip, Typography } from "@mui/material";

export const PinnedPlantsAccordion = () => {
    const { pinnedIds, clearPins } = usePinnedPlants();
    const pinnedPlants = plantsWithAverages.filter((p) =>
        pinnedIds.includes(p.id)
    );
 
    return (
        <Accordion
            elevation={0}
            sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                "&:before": { display: "none" },
                mt: 2,
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                    borderRadius: 2,
                    "& .MuiAccordionSummary-content": {
                        alignItems: "center",
                        gap: 1,
                    },
                }}
            >
                <PushPinIcon fontSize="small" color="primary" />
                <Typography variant="subtitle1" fontWeight={600}>
                    Pinned Plants
                </Typography>
                <Chip
                    label={pinnedPlants.length}
                    size="small"
                    color={pinnedPlants.length > 0 ? "primary" : "default"}
                    sx={{ ml: 0.5 }}
                />

                {pinnedPlants.length > 0 && (
                    <Tooltip title="Clear all pins">
                        <IconButton
                            size="small"
                            onClick={(e) => {
                                e.stopPropagation(); // don't toggle accordion
                                clearPins();
                            }}
                            sx={{ ml: "auto", mr: 1 }}
                        >
                            <ClearIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                )}
            </AccordionSummary>
 
            <AccordionDetails sx={{  pt: 0 }}>
                {pinnedPlants.length === 0 ? (
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textAlign: "center", py: 3 }}
                    >
                        No plants pinned yet. Click the pin icon on any plant to add it here.
                    </Typography>
                ) : (
                    <PlantChartMui plants={pinnedPlants} />
                )}
            </AccordionDetails>
        </Accordion>
    );
};
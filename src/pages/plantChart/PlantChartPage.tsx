import { PlantChartMui } from "@/components/chart/PlantChartMui";
import { PlantSearch } from "@/components/PlantSearch";
import { ZoomControls } from "@/components/ZoomControls";
import { PlantFilterProvider } from "@/contexts/PlantFilterProvider";
import { ZoomProvider } from "@/contexts/ZoomProvider";
import { plantsWithAverages } from "@/data/plants";
import { Box, Stack } from "@mui/material";

export const PlantChartPage = () => {
    return (
        <Stack sx={{ px: 4 }}>
            <ZoomProvider>
                <PlantFilterProvider>
                    <Stack alignItems="center">
                        <PlantSearch allPlants={plantsWithAverages} />
                    </Stack>

                    <Box sx={{ ml: 4 }}>
                        <PlantChartMui />
                    </Box>

                    <Box
                        sx={{
                            position: "fixed",
                            top: "50%",
                            left: 16,
                            transform: "translateY(-50%)",
                            gap: 1,
                            zIndex: 10,
                            padding: 1,              // space inside the box
                            borderRadius: 2,         // rounded corners
                            backgroundColor: "rgba(255,255,255,0.9)",  // semi-transparent white
                            boxShadow: 1,            // subtle shadow for depth
                            border: "1px solid rgba(0,0,0,0.1)",       // subtle border
                            backdropFilter: "blur(4px)",               // slightly blur content behind
                        }}
                    >
                        <ZoomControls />
                    </Box>

                </PlantFilterProvider>
            </ZoomProvider>
        </Stack>
    );
};
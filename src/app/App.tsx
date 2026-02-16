import { PlantChartMui } from "@/components/chart/PlantChartMui"
import { AppBarNavLayout } from "@erica/mui-web"
import { Box, Paper } from "@mui/material"
import type React from "react"
import { Route, Routes } from "react-router"
import Logo from "@/assets/logo.svg"
import { PlantChartPage } from "@/pages/plantChart/PlantChartPage"


export const App: React.FC = () => {
  return (
    <AppBarNavLayout
      containerProps={{ disableGutters: true, maxWidth: false }}
      logo={
        <Box
          component="img"
          src={Logo}
          sx={{ maxHeight: 100 }}
        />
      }
      navItems={[]}
    >
      <Paper elevation={0} >
        <Routes>
          <Route path="/" element={
            <PlantChartPage />
          }
          />
        </Routes>
      </Paper>
    </AppBarNavLayout>
  );
}

export default App;

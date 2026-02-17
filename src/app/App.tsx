import { ClickableLogo } from "@/components/ClickableLogo"
import { AboutPage } from "@/pages/about/AboutPage"
import { HomePage } from "@/pages/home/HomePage"
import { PlantChartPage } from "@/pages/plantChart/PlantChartPage"
import { AppBarNavLayout } from "@erica/mui-web"
import { Paper } from "@mui/material"
import type React from "react"
import { Route, Routes } from "react-router"


export const App: React.FC = () => {
  return (
    <AppBarNavLayout
      containerProps={{ disableGutters: true, maxWidth: false }}
      logo={<ClickableLogo />}
      navItems={[
        { label: "Plant Chart", to: "/plant-chart", },
        { label: "About", to: "/about", },
      ]}
    >
      <Paper elevation={0} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/plant-chart" element={<PlantChartPage />} />
        </Routes>
      </Paper>
    </AppBarNavLayout>
  );
}

export default App;

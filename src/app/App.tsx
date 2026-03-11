import { ClickableLogo } from "@/components/ClickableLogo"
import { AboutPage } from "@/pages/about/AboutPage"
import { HomePage } from "@/pages/home/HomePage"
import { PlantChartPage } from "@/pages/plantChart/PlantChartPage"
import { AppBarNavLayout } from "@erica/mui-web"
import { Paper, Typography } from "@mui/material"
import type React from "react"
import { Route, Routes } from "react-router"
import { Footer } from "./Footer"
import { NotFoundPage } from "@/pages/not-found/NotFoundPage"


export const App: React.FC = () => {
  return (
    <AppBarNavLayout
      containerProps={{ disableGutters: true, maxWidth: false }}
      logo={<ClickableLogo />}
      navItems={[
        { label: "About", to: "/about", },
        { label: "Find Plants", to: "/find-plants", },
      ]}
      navItemDivider={
        <Typography>•</Typography>
      }
      footer={<Footer />}
    >
      <Paper elevation={0} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/find-plants" element={<PlantChartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Paper>
    </AppBarNavLayout>
  );
}

export default App;

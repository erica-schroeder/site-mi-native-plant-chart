import { PlantChartMui } from "@/components/PlantChartMui"
import { AppBarNavLayout } from "@erica/mui-web"
import { Box } from "@mui/material"
import type React from "react"
import { Route, Routes } from "react-router"


export const App: React.FC = () => {
  return (
    <AppBarNavLayout
      containerProps={{ maxWidth: false, sx: { flexGrow: 1, minWidth: 0 } }}
      logo={
        <Box
          width={50}
          height={50}
          sx={{ backgroundColor: 'blue', color: 'green' }}
        />
      }
      navItems={[{
        label: 'Library', to: '/library'
      }]}
    >
      <Routes>
        <Route path="/" element={
          <Box
            sx={{
              flexGrow: 1,
              overflow: 'scroll',
            }}
          >
            <PlantChartMui />
          </Box>
        }
        />
      </Routes>
    </AppBarNavLayout>
  );
}

export default App;

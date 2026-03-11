import EmailLink from "@/components/EmailLink";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        maxWidth: "md",
        margin: "auto",
        padding: { xs: 2, sm: 4 },
        textAlign: "justfy",
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h4" component="h1">
          Welcome to Native Notebook!
        </Typography>

        <Typography variant="body1">
          Thanks for visiting! This site is designed to help you explore and compare <strong>Michigan native plants</strong>. Browse plants by height, bloom color, sun and soil needs, and more.
        </Typography>

        <Box>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            What you can do here:
          </Typography>
          <ul style={{ textAlign: "left", maxWidth: 500 }}>
            <li>Compare plants visually, to scale, along height and spread</li>
            <li>Filter by bloom color, sun, and soil requirements</li>
            <li>Search by common or scientific name</li>
          </ul>
        </Box>

        <Typography variant="body1">
          Note: This site is a <strong>work in progress</strong> and is being updated regularly.
        </Typography>

        <Typography variant="body1">
          Questions or feedback? Reach out to <EmailLink user="hello" />!
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/find-plants")}
        >
          Start Exploring!
        </Button>
      </Stack>
    </Box>
  );
};
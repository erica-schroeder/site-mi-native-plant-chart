import { Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router";

export const NotFoundPage = () => (
    <Stack alignItems="center" justifyContent="center" spacing={4} sx={{ mt: 6 }}>
        <Typography color="text.secondary">
            Sorry, it looks like this page isn't here!
        </Typography>
        <Button component={Link} to="/" variant="outlined">
            Back to Home
        </Button>
    </Stack>
);
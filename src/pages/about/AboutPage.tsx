import EmailLink from "@/components/EmailLink";
import { Box, Link, Stack, Typography } from "@mui/material";

export const AboutPage = () => {
  return (
    <Box
      sx={{
        maxWidth: "md",
        margin: "auto",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Stack spacing={5}>
        <Stack spacing={3}>
          <Typography variant="h4" component="h1">
            About Native Notebook
          </Typography>

          <Typography>
            Hi there! I'm excited to share this project with you.
          </Typography>

          <Typography>
            Native Notebook is my attempt to create a comprehensive and easy-to-use resource for Michigan native plants (with the hope of expanding to other regions in the future). Whether you're planning a garden, a landscape, or just curious about local plants, this site is here to help.
          </Typography>

          <Typography>
            This chart is designed to give a clear, to-scale view of each plant, so we can better plan gardens and understand how different species relate to each other.
          </Typography>

          <Typography>
            I also want this resource to be a quick, comprehensive reference for key plant information: height, spread, bloom color, sun and soil requirements, and more — all in one place. My hope is that it saves us time planning so we can spend more time planting.
          </Typography>

          <Box>
            <Typography fontWeight="bold">A few things to keep in mind:</Typography>
            <ul>
              <li>This is a <strong>work in progress</strong>. Many plants aren't included yet, and some entries may still be incomplete.</li>
              <li>Updates happen regularly as I finish illustrations.</li>
            </ul>
          </Box>

          <Typography>
            If you notice any errors, omissions, or have suggestions, I'd love to hear from you: <EmailLink user="hello" />
          </Typography>
        </Stack>

        <Stack spacing={3}>
          <Typography variant="h4" component="h1">
            About Me
          </Typography>

          <Typography>
            I'm a Michigan gardener whose entire personality has become native plants in the last few years. I love how much life I see in my yard now, and never would have guessed planting natives would make such a difference! (I also love that these plants survive, given my unintentional track record of killing ornamentals...). Now I'm an active member of <Link href="https://wildones.org/" target="_blank" rel="noopener noreferrer">Wild Ones</Link> and other native plant organizations.
          </Typography>

          <Typography>
            This project grew out of my own overwhelm when trying to decide what plants to buy and where to put them. While there are many great resources out there, it's hard to get good visual references that show the scale of a single mature plant. So I decided to try and build one myself. My hope is that with this tool, we may never again stand paralyzed in front of a table of 6 different goldenrods trying to figure out which to grab!
          </Typography>

          <Typography>
            Thanks for stopping by, and happy gardening!
          </Typography>

          <Typography>
            - Erica
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );

};
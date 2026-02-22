import { iconMap } from "@/theme/icons";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Link, Stack, Typography } from "@mui/material";

const traits = [{
  name: "Keystone Species",
  description:
    <>
      Plants with an outsized ecological impact in their native range.  <Link href="https://www.nwf.org/Native-Plant-Habitats/Plant-Native/Why-Native/Keystone-Plants-by-Ecoregion" target="_blank" rel="noopener noreferrer">Learn more</Link>.
      <br />
      <br />
      On this site, keystone status is based on the Homegrown National Park <Link href="https://homegrownnationalpark.org/keystone-plants/" target="_blank" rel="noopener noreferrer">keystone species list</Link>.
    </>,
  icon: iconMap.traits.keystone,
}];

export const TraitsDialog = ({ open, onClose, ...props }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth {...props}>
      <DialogTitle>Plant Traits</DialogTitle>
      <DialogContent>
        {traits.map((trait) => (
          <Stack key={trait.name} spacing={2} direction="row" alignItems="begin">
            <Box component="img" src={trait.icon.src} width={24} height={24} mr={1} />

            <Stack>
              <Typography fontWeight="bold" variant="subtitle1">{trait.name}</Typography>
              <Typography variant="body2" color="textSecondary">{trait.description}</Typography>
            </Stack>
          </Stack>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
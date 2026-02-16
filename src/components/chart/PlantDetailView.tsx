import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Dialog, DialogContent, Tooltip, Typography } from "@mui/material";

export const PlantDetailView = ({ plant, open, ...props }) => {
    const googleSearchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
        plant?.scientificName
    )}&safe=active`;

    return (
        <Dialog open={open} {...props} >
            <DialogContent>
                <Typography>{plant?.commonName}</Typography>
                <Tooltip title="Google image search for photos">
                    <a
                        href={googleSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Search for photos"
                    >
                        <CameraAltIcon />
                    </a>
                </Tooltip>
            </DialogContent>
        </Dialog>
    )
};
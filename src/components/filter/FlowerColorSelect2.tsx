import type { Color } from '@/types/plant';
import {
    ToggleButton,
    ToggleButtonGroup,
    Tooltip
} from '@mui/material';


const FLOWER_COLORS: { label: string; value: Color }[] = [
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'pink', label: 'Pink' },
    { value: 'white', label: 'White' },
];

export function FlowerColorSelect2({ value, onChange, ...props }) {
    return (
        <ToggleButtonGroup
            value={value}
            onChange={(_, value) => onChange(value)}
            {...props}
        >
            {FLOWER_COLORS.map(color =>
                <ToggleButton value={color.value}>
                    <Tooltip title={color.label}>
                        <img src={`icons/flower-${color.value}-icon.svg`} width={30} height={20} style={{ transform: "scale(1.2)", display: "block" }} />
                    </Tooltip>
                </ToggleButton>
            )}
        </ToggleButtonGroup>
    );
}

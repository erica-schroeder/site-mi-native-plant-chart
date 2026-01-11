import type { Plant } from "@/types/plant";
import { forbs } from "./forbs";
import { grasses } from "./grasses";
import { sedges } from "./sedges";

export const plants: Plant[] = [
    ...forbs,
    ...grasses,
    ...sedges,
];

export const plantsWithAverages = plants.map(p => ({
    ...p,
    avgHeight: (p.heightFt.min + p.heightFt.max) / 2,
    avgWidth: (p.widthFt.min + p.widthFt.max) / 2,
}));
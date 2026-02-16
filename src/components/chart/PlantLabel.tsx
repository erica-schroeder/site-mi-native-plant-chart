import type { SoilMoisture, SunLevel } from "@/types/plant";

export const PlantLabel = ({ plant, x, y }) => {
    // TODO: move sun/soil indicator into separate component
    const iconRowY = y + 20;
    const soilIconSize = 12;
    const sunIconSize = 16;

    const rowHeight = Math.max(sunIconSize, soilIconSize);
    const sunY = iconRowY + (rowHeight - sunIconSize) / 2;
    const soilY = iconRowY + (rowHeight - soilIconSize) / 2;

    const spacing = 4;
    const gapBetweenGroups = 20;

    const soilLevels: SoilMoisture[] = ["wet", "med", "dry"];
    const sunLevels: SunLevel[] = ["full", "part", "shade"];

    const sunIcons = sunLevels
        .filter(level => plant.sun.includes(level))
        .map((level, i) => (
            <image
                key={level}
                href={`icons/${level}-sun-icon.svg`}
                x={x + i * (sunIconSize + spacing)}
                y={sunY}
                width={sunIconSize}
                height={sunIconSize}
            />
        ));

    const sunWidth = sunIcons.length * sunIconSize + Math.max(0, sunIcons.length - 1) * spacing;

    const barX = x + sunWidth + gapBetweenGroups / 2;

    const soilIcons = soilLevels
        .filter(level => plant.soilMoisture.includes(level))
        .map((level, i) => (
            <image
                key={level}
                href={`icons/${level}-soil-icon.svg`}
                x={x + sunWidth + gapBetweenGroups + i * (soilIconSize + spacing)}
                y={soilY}
                width={soilIconSize}
                height={soilIconSize}
            />
        ));


    return (
        <g transform={`rotate(45, ${x}, ${y})`}>
            <text
                x={x}
                y={y}
                fontSize={12}
                textAnchor="start"
                fill="#333"
            >
                <tspan fontWeight="bold">{plant.commonName}</tspan>
                {plant.scientificName && (
                    <tspan x={x} dy="1.2em" fontStyle="italic">
                        {plant.scientificName}
                    </tspan>
                )}
            </text>

            {sunIcons}

                <line
      x1={barX}
      y1={iconRowY}
      x2={barX}
      y2={iconRowY + rowHeight}
      stroke="#666"
      strokeWidth={1}
      strokeLinecap="round"
    />

            {soilIcons}
        </g>
    );
}
import { ChartsSurface, useXScale, useYScale } from '@mui/x-charts';

export const PlantRenderer = ({ plants, spacingFt=.5 }) => {
  const xScale = useXScale('x');
  const yScale = useYScale('y');

  if (!xScale || !yScale) return null;

  let cumulativeFeet = 0;

  return (
    <ChartsSurface>
      {plants.map((p, i) => {
        const widthFeet = p.avgWidth ?? 1;
        const heightFeet = p.avgHeight ?? 1;

        const xPx = xScale(cumulativeFeet);

        const widthPx =
          xScale(cumulativeFeet + widthFeet) - xScale(cumulativeFeet);

        const baselineY = yScale(0);
        const heightPx = yScale(0) - yScale(heightFeet);
        const topY = baselineY - heightPx;

        // Advance feet AFTER computing current plant
        cumulativeFeet += widthFeet;

        // Add spacing only BETWEEN plants
        if (i < plants.length - 1) {
          cumulativeFeet += spacingFt;
        }

        // return SVG image or rectangle placeholder
        return p.svg ? (
          <image
            key={p.id}
            href={`${import.meta.env.BASE_URL}${p.svg}`}
            x={xPx}
            y={topY}
            width={widthPx}
            height={heightPx}
            preserveAspectRatio="xMidYMax meet"
          />
        ) : (
          <rect
            key={p.id}
            x={xPx}
            y={topY}
            width={widthPx}
            height={heightPx}
            fill="green"
            stroke="black"
          />
        );
      })}
    </ChartsSurface>
  );
}

import { ChartsSurface, useXScale, useYScale } from '@mui/x-charts';

export const PlantRenderer = ({ plants, pxPerFoot }) => {
  const xScale = useXScale('x');
  const yScale = useYScale('y');

  if (!xScale || !yScale) return null;

  let cumulativeX = 0;

  return (
    <ChartsSurface>
      {plants.map((p) => {
        // compute pixel positions
        const xPx = xScale(cumulativeX);
        const widthPx = p.avgWidth * pxPerFoot;
        const heightPx = p.avgHeight * pxPerFoot;

        const baselineY = yScale(0);       // Y=0 in pixels
        const topY = baselineY - heightPx; // SVG y=top-left

        cumulativeX += p.avgWidth + .5;

        // return SVG image or rectangle placeholder
        return p.svg ? (
          <image
            key={p.id}
            href={p.svg}
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

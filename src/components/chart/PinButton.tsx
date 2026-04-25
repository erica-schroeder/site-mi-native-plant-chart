export const PIN_SIZE = 14;
export const PIN_PADDING = 2;
 
// MUI PushPin icon path (viewBox 0 0 24 24)
const PUSH_PIN_PATH = "M16 9V4l1 0c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1l1 0v5c0 1.66-1.34 3-3 3h0v2h5.97v7l1 1 1-1v-7H19v-2h0c-1.66 0-3-1.34-3-3z";
 
export const PinButton = ({ x, y, pinned, onClick }) => {
  return (
    <g
      onClick={(e) => {
        e.stopPropagation(); // don't also trigger setActivePlant
        onClick();
      }}
      style={{ cursor: 'pointer' }}
    >
      {/* Hit area */}
      <rect
        x={x}
        y={y}
        width={PIN_SIZE + PIN_PADDING * 2}
        height={PIN_SIZE + PIN_PADDING * 2}
        rx={6}
        fill={pinned ? "rgba(25, 118, 210, 0.15)" : "rgba(255,255,255,0.75)"}
        stroke={pinned ? "rgba(25, 118, 210, 0.5)" : "rgba(0,0,0,0.15)"}
        strokeWidth={1}
      />
      {/* Icon — scale the 24x24 viewBox path into PIN_SIZE */}
      <g transform={`translate(${x + PIN_PADDING}, ${y + PIN_PADDING}) scale(${PIN_SIZE / 24})`}>
        <path
          d={PUSH_PIN_PATH}
          fill={pinned ? "#1976d2" : "#555"}
        />
      </g>
    </g>
  );
};
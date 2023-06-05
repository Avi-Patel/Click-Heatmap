import { useEffect } from "react";
import useMeasure from "react-use/lib/useMeasure";
import simpleheat from "simpleheat";

import { data } from "./data";

export const SimpleHeat = ({ children }) => {
  const [containerRef, { height, width }] = useMeasure();

  useEffect(() => {
    if (height > 0 && width > 0) {
      const heat = simpleheat("canvas");
      heat.data(data);
      heat.max(200);
      heat.radius(15, 7);
      heat.gradient({ 0.35: "blue", 0.45: "lime", 0.75: "yellow", 1: "red" });
      heat.draw();
    }
  }, [height, width]);

  console.log(height, width, "height, width");

  return (
    <div
      ref={containerRef}
      style={{
        display: "inline-block",
        position: "relative"
      }}
    >
      {children}
      <canvas
        id="canvas"
        width={width}
        height={height}
        style={{
          position: "absolute",
          top: 0,
          left: 0
        }}
      />
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          position: "absolute",
          top: 0,
          left: 0
        }}
      >
        <svg height="100%" width="100%">
          {/* demo for rect of tooltip handler */}
          {/* <rect x={150} y={200} height={100} width={100} fill="red" /> */}
        </svg>
      </div>
    </div>
  );
};

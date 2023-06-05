import { useEffect, useMemo } from "react";

import Heatmap from "visual-heatmap";

export default function App() {
  useEffect(() => {
    const instance = Heatmap("#root", {
      size: 200.0,
      points: 300,
      max: 200,
      blur: 1.0,
      gradient: [
        //white
        {
          color: [255, 255, 255, 0.5],
          offset: 0.05
        },
        //blue
        {
          color: [0, 150, 255, 1],
          offset: 0.1
        },

        //light green
        {
          color: [173, 255, 47, 1.0],
          offset: 0.2
        },

        //yellow
        {
          color: [255, 255, 0, 1.0],
          offset: 0.3
        },

        //red
        {
          color: [255, 0, 0, 1.0],
          offset: 1.0
        }
      ]
    });
    instance.renderData([
      { x: 100, y: 100, value: 50 },
      { x: 100, y: 120, value: 100 },
      { x: 120, y: 130, value: 150 },
      { x: 120, y: 145, value: 200 },

      { x: 200, y: 100, value: 50 },
      { x: 200, y: 120, value: 100 },
      { x: 220, y: 130, value: 150 },
      { x: 220, y: 145, value: 200 }
    ]);
  }, []);

  return (
    <div style={{ height: "200px", width: "100px" }}>
      <div id="root"></div>
    </div>
  );
}

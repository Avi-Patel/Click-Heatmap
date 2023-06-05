import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { SimpleHeat } from "./SimpleHeat";
import { Image } from "./Image";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SimpleHeat>
      <Image />
    </SimpleHeat>
  </StrictMode>
);

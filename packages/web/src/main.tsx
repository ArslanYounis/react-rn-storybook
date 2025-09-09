import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "../dls";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button />
  </StrictMode>
);

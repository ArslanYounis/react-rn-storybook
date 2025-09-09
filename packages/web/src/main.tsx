import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from ".";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button />
  </StrictMode>
);

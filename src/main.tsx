import { createRoot } from "react-dom/client";
import App from "@app/App";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")!).render(
  <Theme>
    <App />
  </Theme>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ColorModeProvider } from "@chakra-ui/color-mode";
import { Provider } from "./components/ui/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);

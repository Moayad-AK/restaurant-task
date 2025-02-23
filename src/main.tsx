import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import QuantityPriceProvider from "./context/cartContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <QuantityPriceProvider>
            <App />
          </QuantityPriceProvider>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);

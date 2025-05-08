"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { persistor } from "@/store/store";
import { queryClient } from "@/store/query-client";
import ErrorHandler from "./components/error-handler/error-handler";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorHandler />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

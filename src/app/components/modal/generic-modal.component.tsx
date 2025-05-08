"use client";

import React from "react";
import { createRoot } from "react-dom/client";
import GenericModalWrapper from "../wrappers/generic-wrapper-modal.component";
import { queryClient } from "@/store/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { store, persistor } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

let modalOpen = false;

export function showGenericModal(
    title: string,
    children: React.ReactNode | ((close: () => void) => React.ReactNode),
    icon?: React.ReactNode
) {
    if (modalOpen) return;

    const container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);

    const close = () => {
        modalOpen = false;
        root.unmount();
        container.remove();
    };

    modalOpen = true;

    const resolvedChildren =
        typeof children === "function" ? children(close) : children;

    root.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <GenericModalWrapper
                        title={title}
                        icon={icon}
                        close={close}
                    >
                        {resolvedChildren}
                    </GenericModalWrapper>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
}

"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface PageLoaderContextValue {
  loaderDone: boolean;
  setLoaderDone: (done: boolean) => void;
}

const PageLoaderContext = createContext<PageLoaderContextValue>({
  loaderDone: false,
  setLoaderDone: () => {},
});

export function PageLoaderProvider({ children }: { children: ReactNode }) {
  const [loaderDone, setLoaderDone] = useState(false);
  return (
    <PageLoaderContext.Provider value={{ loaderDone, setLoaderDone }}>
      {children}
    </PageLoaderContext.Provider>
  );
}

export function usePageLoader() {
  return useContext(PageLoaderContext);
}

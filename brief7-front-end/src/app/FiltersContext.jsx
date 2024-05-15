"use client";

import { createContext } from "react";

export const FiltersContext = createContext();

export function FiltersContextProvider({ children }) {

  const valueA = 135432;

  const filters = {
    destination: "lol",
    category: "",
    startDate: "",
    endDate: "",
  };

  const contextValues = {
    valueA,
    filters
  }

  return <FiltersContext.Provider value={contextValues}>{children}</FiltersContext.Provider>;
}
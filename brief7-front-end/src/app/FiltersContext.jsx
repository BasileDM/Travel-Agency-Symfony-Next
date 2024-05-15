"use client";

import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersContextProvider({ children }) {

  const [filters, setFilters] = useState({
    destination: "",
    category: "Category 0",
    startDate: "",
    endDate: "",
  });

  const updateCategoryFilter = (value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: value,
    }));
  };

  const contextValues = {
    filters,
    updateCategoryFilter,
  };

  return <FiltersContext.Provider value={contextValues}>{children}</FiltersContext.Provider>;
}

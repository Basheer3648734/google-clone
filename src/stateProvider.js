import React from "react";
import { useContext, createContext, useReducer } from "react";

export const ContextProvider = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  return (
    <ContextProvider.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ContextProvider.Provider>
  );
};
export const useContextState = () => useContext(ContextProvider);

import React, { useReducer, useContext, createContext } from "react";

const initialState = [];
const ExpenseTrackerContext = createContext(initialState);
const Provider = ({ children }) => {
  return (
    <ExpenseTrackerContext.Provider value={{ appname: "Tracker" }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default Provider;

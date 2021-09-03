import React, { FormEvent, useContext, useReducer } from "react";

import { reducer } from "../reducer/reducer";
import { IState, IValue } from "../interfaces";

const initialState: IState = {
  inputValue: "",
};

const initialContextState: IValue = {
  newState: initialState,
  handleNumberOpClick: function () {},
};

const AppContext = React.createContext<IValue>(initialContextState);

const AppProvider = ({ children }: { children: any }) => {
  const [newState, dispatch] = useReducer(reducer, initialState);

  const handleNumberOpClick = (e: any) => {
    dispatch({ type: "ON_NUMBER_OP_CLICK", payload: e.target.innerHTML });
  };

  return (
    <AppContext.Provider value={{ newState, handleNumberOpClick }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

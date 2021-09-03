import React, { useContext, useReducer } from "react";

import { reducer } from "../reducer/reducer";
import { IState, IValue } from "../interfaces";

const initialState: IState = {
  inputValue: "",
};

const initialContextState: IValue = {
  newState: initialState,
  handleNumberOpClick: function () {},
  handleEqualClick: function () {},
  handleClearClick: function () {},
  handleBackspaceClick: function () {},
};

const AppContext = React.createContext<IValue>(initialContextState);

const AppProvider = ({ children }: { children: any }) => {
  const [newState, dispatch] = useReducer(reducer, initialState);

  const handleNumberOpClick = (e: any) => {
    let newInputValue = newState.inputValue || "";
    if (newState.inputValue === "Error") {
      dispatch({
        type: "ON_NUMBER_OP_CLICK",
        payload: e.target.name,
      });
      return;
    }
    newInputValue = newInputValue.concat(e.target.name);
    dispatch({ type: "ON_NUMBER_OP_CLICK", payload: newInputValue });
  };

  const handleEqualClick = () => {
    try {
      if (newState.inputValue === "Error" || !newState.inputValue) {
        dispatch({
          type: "ON_EQUAL_CLICK",
          payload: "",
        });
        return;
      }
      dispatch({
        type: "ON_EQUAL_CLICK",
        payload: eval(newState.inputValue).toString(),
      });
    } catch (err) {
      dispatch({
        type: "ON_EQUAL_CLICK",
        payload: "Error",
      });
    }
  };

  const handleClearClick = () => {
    dispatch({ type: "ON_CLEAR_CLICK" });
  };

  const handleBackspaceClick = () => {
    const newInputValue = newState.inputValue.slice(0, -1) || "";
    dispatch({ type: "ON_BACKSPACE_CLICK", payload: newInputValue });
  };

  return (
    <AppContext.Provider
      value={{
        newState,
        handleNumberOpClick,
        handleEqualClick,
        handleClearClick,
        handleBackspaceClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

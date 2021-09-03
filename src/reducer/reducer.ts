import { IAction, IState } from "../interfaces";

export const reducer = (currentState: IState, action: IAction): IState => {
  const { type, payload } = action;

  if (type === "ON_NUMBER_OP_CLICK") {
    // console.log(payload);
    return { ...currentState, inputValue: payload };
  }

  if (type === "ON_EQUAL_CLICK") {
    // console.log(currentState.inputValue);
    return { ...currentState, inputValue: payload };
  }

  if (type === "ON_CLEAR_CLICK") {
    return { ...currentState, inputValue: "" };
  }

  if (type === "ON_BACKSPACE_CLICK") {
    return { ...currentState, inputValue: payload };
  }

  return currentState;
};

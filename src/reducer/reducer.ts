import { IAction, IState } from "../interfaces";

export const reducer = (currentState: IState, action: IAction): IState => {
  const { type, payload } = action;

  if (type === "ON_NUMBER_OP_CLICK") {
    console.log(payload);
    return { ...currentState, inputValue: payload };
  }

  return currentState;
};

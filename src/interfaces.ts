export type IType =
  | "ON_NUMBER_OP_CLICK"
  | "ON_CLEAR_CLICK"
  | "ON_BACKSPACE_CLICK"
  | "ON_EQUAL_CLICK";

export interface IState {
  inputValue: string;
}

export interface IAction {
  type: IType;
  payload?: any;
}

export interface IValue {
  newState: IState;
  handleNumberOpClick: any;
  handleEqualClick: any;
  handleClearClick: any;
  handleBackspaceClick: any;
}

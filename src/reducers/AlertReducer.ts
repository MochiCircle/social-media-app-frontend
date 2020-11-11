import { IAlertState } from ".";
import { AlertTypes } from "../actions/AlertTypes";
const initialState: IAlertState[] = [];

export const alertReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case AlertTypes.SET_ALERT:
      return [...state, payload];
    case AlertTypes.REMOVE_ALERT:
      return state.map((alert) => alert.id !== payload);
    default:
      return state;
  }
};

export default alertReducer;

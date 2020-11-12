import { AlertTypes } from "./AlertTypes";

export interface ISetAlert {
  setAlert: (msg: string, alertType: string, timeout?: number) => void;
}

export const setAlert = (
  msg: string,
  alertType: string,
  timeout: number = 4000
) => (dispatch: any) => {
  const id = Math.floor(Math.random() * 1000);
  dispatch({ type: AlertTypes.SET_ALERT, payload: { msg, alertType, id } });
  setTimeout(
    () => dispatch({ type: AlertTypes.REMOVE_ALERT, payload: id }),
    timeout
  );
};

export const removeAlert = (id: string) => (dispatch: any) => {
  dispatch({ type: AlertTypes.REMOVE_ALERT, payload: id });
};

import { AlertTypes } from "./AlertTypes";

export const setAlert = (msg, alertType, timeout = 4000) => (dispatch) => {
  const id = Math.floor(Math.random() * 1000);
  dispatch({ type: AlertTypes.SET_ALERT, payload: { msg, alertType, id } });
  setTimeout(
    () => dispatch({ type: AlertTypes.REMOVE_ALERT, payload: id }),
    timeout
  );
};

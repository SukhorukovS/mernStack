import { v4 as uuidv4 } from 'uuid';

import { SET_ALERT, REMOVE_ALERT } from './types';

export type SetAlertPayloadType = {
  msg: string;
  alertType: string;
  id: string;
};

export type AlertActionType = {
  type: typeof SET_ALERT | typeof REMOVE_ALERT,
  payload: SetAlertPayloadType
}

export const setAlert = (msg: string, alertType: string, timeout = 5000) => (
  dispatch: Function
) => {
  const id: string = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

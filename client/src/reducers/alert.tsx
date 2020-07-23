import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
import { AlertActionType, SetAlertPayloadType } from '../actions/alert';

const initialState: Array<SetAlertPayloadType> = [];

export default function (
  state = initialState,
  action: any
): Array<SetAlertPayloadType> {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

import { userType } from "./userActionType";

export const setCurrentUser = (user) => ({
  type: userType.SET_CURRENT_USER,
  payload: user,
});

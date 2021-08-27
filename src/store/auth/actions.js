export const authActionsTypes = {
  SET_IS_LOGGED: "SET_IS_LOGGED",
  SET_USER_DATA: "SET_USER_DATA",
};

export const authActions = {
  setIsLogged: (payload) => ({
    type: authActionsTypes.SET_IS_LOGGED,
    isLogged: payload,
  }),
  setUserData: (payload) => ({
    type: authActionsTypes.SET_USER_DATA,
    userData: payload,
  }),
};

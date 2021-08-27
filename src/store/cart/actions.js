export const cartActionsTypes = {
  SET_CART: "SET_CART",
  SET_COUNT_CART: "SET_COUNT_CART",
};

export const cartActions = {
  setCart: (payload) => ({
    type: cartActionsTypes.SET_CART,
    cart: payload,
  }),
  setCountCart: (payload) => ({
    type: cartActionsTypes.SET_COUNT_CART,
    countCart: payload,
  }),
};

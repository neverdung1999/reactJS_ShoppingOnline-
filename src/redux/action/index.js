import * as types from "../constants/actionType";

export const actAddtoCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};

export const actChangeMessage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message,
  };
};

export const onDeleteProductInCart = (product) => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product,
  };
};

export const onUpdateProductInCart = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity,
  };
};

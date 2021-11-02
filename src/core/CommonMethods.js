export const isInCart = (cartProducts, item) => {
  let prevCarts = [...cartProducts];
  let index = prevCarts.findIndex(thisItem => thisItem.id === item.id);
  return index !== -1;
};

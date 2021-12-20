export const isInCart = (cartProducts, item) => {
  let prevCarts = [...cartProducts];
  let index = prevCarts.findIndex(thisItem => thisItem.id === item.id);
  return index !== -1;
};

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function validatePhone(phone) {
  const phoneRegex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
  return phoneRegex.test(phone);
}

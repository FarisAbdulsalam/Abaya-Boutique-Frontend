const CART_KEY = "cart";

const loadCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const addStandardAbayaToCart = (userId, abaya) => {
  const cart = loadCart();

  const cartItem = {
    ...abaya,
    _cartId: `${abaya._id}`,
    userId,
  };

  cart.push(cartItem);
  saveCart(cart);
};

const addCustomAbayaToCart = (userId, customAbaya) => {
  const cart = loadCart();
  cart.push({
    _id: `custom-${Date.now()}`,
    userId,
    type: "custom",
    ...customAbaya
  });
  saveCart(cart);
  return cart;
};

const getCart = (userId) => {
  const cart = loadCart();
  return cart.filter(item => item.userId === userId);
};

const removeFromCart = (userId, itemId) => {
  let cart = loadCart();
  cart = cart.filter(item => !(item.userId === userId && item._id === itemId));
  saveCart(cart);
  return cart;
};

const clearCart = (userId) => {
  let cart = loadCart();
  cart = cart.filter(item => item.userId !== userId);
  saveCart(cart);
  return cart;
};

export {
  addCustomAbayaToCart,
  addStandardAbayaToCart,
  getCart,
  removeFromCart,
  clearCart
};

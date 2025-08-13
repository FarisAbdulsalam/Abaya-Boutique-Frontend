const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;




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

      image: abaya.image?.startsWith("http")
      ? abaya.image
      : `${BASE_URL}${abaya.image}`,

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
    image: customAbaya.image || customAbaya.selectedImage || "",
    ...customAbaya,
     image: customAbaya.image?.startsWith("http")
      ? customAbaya.image
      : `${BASE_URL}${customAbaya.image}`

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

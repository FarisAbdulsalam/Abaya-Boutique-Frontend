const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

const addStandardAbayaToCart = async (userId, abayaId) => {
  const res = await fetch(`${BASE_URL}/${abayaId}/${userId}/add-to-cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
};

const addCustomAbayaToCart = async (userId, customAbaya) => {
  const res = await fetch(`${BASE_URL}/${customAbaya}/${userId}/add-to-cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customAbaya),
  });
  return res.json();
};

const getCart = async () => {
  const res = await fetch(`${BASE_URL}/${userId}/cart`);
  return res.json();
};

const removeFromCart = async (userId, abayaId) => {
  const res = await fetch(`${BASE_URL}/${userId}/cart/${abayaId}`, {
    method: "DELETE",
  });
  return res.json();
};

export {
  addCustomAbayaToCart,
  addStandardAbayaToCart,
  getCart,
  removeFromCart,
};

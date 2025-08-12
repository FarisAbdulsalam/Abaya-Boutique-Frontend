import React, { useEffect, useState } from "react";
import * as cartService from "../../services/cartService";

const Cart = ({ userId }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const fetchCart = () => {
    const cartData = cartService.getCart(userId);
    setCart(cartData);
    let totalPrice = 0;
    cartData.forEach((item) => {
      totalPrice += item.price * (item.quantity || 1);
    });
    setTotal(totalPrice);
  };

  const handleRemove = (abayaId) => {
    cartService.removeFromCart(userId, abayaId);
    fetchCart();
  };
  const handleClear = () => {
    cartService.clearCart(userId);
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, [userId]);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      <ul>
        {cart.map((item) => (
          <li key={item._id}>
            <img src={item.image} alt={item.title} />
            <div>
              <strong>
                {item.type === "standard" ? item.title : "Custom Abaya"}
              </strong>
              <p>Size: {item.size}</p>
              <p>{item.price} BD</p>
            </div>
            <button onClick={() => handleRemove(item._id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total:{total} BD</h3>
      {cart.length > 0 && <button onClick={handleClear}>Clear Cart</button>}
    </div>
  );
};

export default Cart;

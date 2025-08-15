import React, { useEffect, useState } from "react";
import * as cartService from "../../services/cartService";
import "./Cart.css";
import { getUser } from "../../services/authService";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const fetchCart = () => {
    const user = getUser();
    if (!user) return;
    const cartData = cartService.getCart(user._id);
    setCart(cartData);
    let totalPrice = 0;
    cartData.forEach((item) => {
      const price = item.price || 0;
      totalPrice += price * (item.quantity || 1);
    });
    setTotal(totalPrice);
  };

  const handleRemove = (abayaId) => {
    const user = getUser();
    cartService.removeFromCart(user._id, abayaId);
    fetchCart();
  };
  const handleClear = () => {
    const user = getUser();
    cartService.clearCart(user._id);
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="cart-container">
      <h2 style={{ color: "#251e1791" }}>Your Cart</h2>
      {cart.length === 0 && <p className="empty-cart">Your cart is empty</p>}
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item._id} className="cart-item">
              {/* <img src={`http://localhost:3001${item.image}`} alt={item.title} /> */}

              {/* <img src={item.image} alt={item.title} /> */}
    
              {/* <img src={item.image} alt={item.title} /> */}
           
            <img
             src={item.image || "/placeholder.png"}
             alt={item.title || "Custom Abaya"}
            
             />



            <div>
              <strong>
                {item.type === "standard" ? item.title : "Custom Abaya"}
              </strong>
              <p>Size: {item.size}</p>
              <p>{item.price} BD</p>
            </div>
            <button className="Remove" onClick={() => handleRemove(item._id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h3 className="total">Total: {total} BD</h3>
      {cart.length > 0 && (
        <button className="clear-btn" onClick={handleClear}>
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;

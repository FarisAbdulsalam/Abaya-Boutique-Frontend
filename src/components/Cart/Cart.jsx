import React, { useEffect, useState } from 'react'
import * as cartService from "../../services/cartService"

const Cart = ({userId}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const fetchCart = async () => {
        try{
            const cart = await cartService.getCart(userId)
            setCart(cart.cart);
            setTotal(cart.cartTotal);
        } catch(err){
            throw new err
        }
    }
    const handleRemove = async (abayaId) => {
        await cartService.removeFromCart(abayaId);
        cartService.fetchCart();
    }
    useEffect(() => {
        fetchCart
    }, [userId])
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      <ul>
        {cart.map(item => (
          <li key={item._id}>
            {item.type === "standard" ? item.abaya?.title : "Custom Abaya"} - ${item.price}
            <button onClick={() => handleRemove(item._id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      {cart.length > 0 && <button onClick={handleClear}>Clear Cart</button>}
    </div>
  )
}

export default Cart;
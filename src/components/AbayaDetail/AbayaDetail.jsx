import { useNavigate } from "react-router";
import './AbayaDetail.css'
import * as cartService from "../../services/cartService";
// import * as abayaService from "../../services/abayaService"

import { getUser } from "../../services/authService";




const AbayaDetail = (props) => {
  // return if props.selected is null
  const navigate = useNavigate()
  
  if (!props.selected) {
    return (
      <div>
        <h1>NO DETAILS</h1>
      </div>
    );
  }
  // return statement if props.selected has a truthy value
  const handleAddToCart = () => {
  const user = getUser();
  cartService.addStandardAbayaToCart(
    user._id,
    {
      _id: props.selected._id,
      title: props.selected.title,
      price: props.selected.price,
      size: props.selected.size,
      image: props.selected.image,
      type: "standard",
    }
  );


    cartService.addStandardAbayaToCart(
      props.userId || "guest",
      {
        _id: props.selected._id,
        title: props.selected.title,
        price: props.selected.price,
        size: props.selected.size,
        image: props.selected.image,
        type: "standard",
      }
    );
    alert("Item added to cart!");
  }


// console.log(props.selected.image);
  
return (
  
  <div className="abaya-detail-container">
    {props.selected.image && (
      <img src={`http://localhost:3001${props.selected.image}`} alt={props.selected.title} />
    )}
    <h1>{props.selected.title}</h1>
    <h2>Size: {props.selected.size}</h2>
    <h2>Price: {props.selected.price}</h2>

    <div className="abaya-detail-buttons">
      {props.isAdmin && (
    <>
      <button
        className="update-btn"
        onClick={() => {
          props.handleFormView(props.selected);
          navigate(`/abaya/${props.selected._id}/edit`);
        }}
      >
        Update Abaya
      </button>

      <button
        className="delete-btn"
        onClick={() => props.handleDeleteAbaya(props.selected._id)}
      >
        Delete Abaya
      </button>
    </>
  )}
      <button className="Add-to-Cart-btn" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  </div>
);
};


export default AbayaDetail; 
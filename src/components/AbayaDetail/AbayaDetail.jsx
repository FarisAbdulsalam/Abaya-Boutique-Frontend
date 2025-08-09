import { useNavigate } from "react-router";

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
  
  
  return (
    <div>
         <h1>{props.selected.image}</h1>
      <h1>{props.selected.title}</h1>
      <h2>Size: {props.selected.size}</h2>
      {/* <h2>
        Quantity: {props.selected.quantity} 
      </h2> */}
       <h2>
        Price: {props.selected.price} 
      </h2>
      <div>
        <button onClick={()=> {props.handleFormView(props.selected)
          navigate(`/abaya/${props.selected._id}/edit`)
        }}> Update Abaya</button>
      </div>
      
 <div>
        <button onClick={()=> props.handleDeleteAbaya(props.selected._id)}> Delete Abaya</button>
      </div>
    </div>
  );
};


export default AbayaDetail; 
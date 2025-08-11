import { useNavigate } from "react-router";
import './AbayaDetail.css'

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
  <div className="abaya-detail-container">
    {props.selected.image && (
      <img src={props.selected.image} alt={props.selected.title} />
    )}
    <h1>{props.selected.title}</h1>
    <h2>Size: {props.selected.size}</h2>
    <h2>Price: {props.selected.price}</h2>

    <div className="abaya-detail-buttons">
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
    </div>
  </div>
);
};


export default AbayaDetail; 
import { useState } from 'react';

const AbayaForm = (props) => {
  
   const initialState = {
    image: '',
    title: '',
    quantity: '',
    size: '',
    price: '',
     }
  
  
  // formData state to control the form.
  const [formData, setFormData] = useState( props.selected ? props.selected : initialState);

  // handleChange function to update formData state.
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(props.selected) {
      props.handleUpdateAbaya(formData, props.selected._id);
    } else{
      props.handleAddAbaya(formData);// نرسل البيانات إلى App
    }
    }
    
  // And finally, the form itself.
  return (
    <div>
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <label htmlFor="image"> image </label>
        <input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          accept="image/*"
          required
        />
        <label htmlFor="title"> Title </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="quantiti"> Quantity </label>
        <input
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <label htmlFor="size"> Size </label>
        <input
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
        />
          <label htmlFor="price"> Price </label>
        <input
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">
          {props.selected ? 'Update Abaya' : ' Add New Abaya'}
         </button>
      </form>
    </div>
  );
}
export default AbayaForm;
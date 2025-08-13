import { useState } from 'react';
import { useNavigate } from 'react-router';
import './AbayaForm.css';


const initialState = {
 image: null,
 title: '',
//  quantity: '',
 size: '',
 price: '',
  }
const AbayaForm = (props) => {
  // formData state to control the form.
  const [formData, setFormData] = useState( props.selected ?  {...props.selected, image:null} : initialState);
const navigate = useNavigate()
 
// handleChange function to update formData state.
  const handleChange = (evt) => {
  const { name, value, files } = evt.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
    setFormData({ ...formData, [name]: value });
  };

  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
//FormData هو كائن خاص في JavaScript يُستخدم لإرسال بيانات معقدة مثل الصور.
  const data = new FormData();
    data.append('title', formData.title);
    data.append('quantity', formData.quantity);
    data.append('size', formData.size);
    data.append('price', formData.price);
    if (formData.image) {
      data.append('image', formData.image);
    }

  

    if(props.selected) {
      props.handleUpdateAbaya(data, props.selected._id);
    } else{
      props.handleAddAbaya(data);// نرسل البيانات إلى App
    }
    navigate('/Abaya')
    }
  
  // And finally, the form itself.
  return (
  <div className="abaya-form-container">
    <h2>{props.selected ? 'Update Abaya' : 'Add New Abaya'}</h2>
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label htmlFor="image">Image</label>
      <input
        type="file"
        id="image"
        name="image"
        onChange={handleChange}
        accept="image/*"
        required={!props.selected}
      />

      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="size">Size</label>
      <select name="size" value={formData.size} onChange={handleChange}>
        <option value="">Select size</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <button type="submit">
        {props.selected ? 'Update Abaya' : 'Add New Abaya'}
      </button>
    </form>
  </div>
)}

export default AbayaForm;
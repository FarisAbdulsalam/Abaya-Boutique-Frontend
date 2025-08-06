import { useState } from 'react';

const initialState = {
 image: null,
 title: '',
 quantity: '',
 size: '',
 price: '',
  }
const AbayaForm = (props) => {
  // formData state to control the form.
  const [formData, setFormData] = useState( props.selected ?  {...props.selected, image:null} : initialState);

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

   props.handleAddAbaya(data);// send formData to Handle in app
    

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
          type="file"
          id="image"
          name="image"
        //   value={formData.image}//not accept it
          onChange={handleChange}
          accept="image/*"
          required={!props.selected} // نجعلها مطلوبة فقط إذا لم يكن تعديل

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
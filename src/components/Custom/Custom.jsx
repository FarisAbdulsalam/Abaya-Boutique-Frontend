import React, { useState } from "react";
import { useNavigate } from "react-router";
// import { Link } from 'react-router';

const Custom = ({ designData, setDesignData }) => {

  const navigate = useNavigate();
 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setDesignData({ color, fabric, accessory, style, size });
    navigate("/preview");

  };

 const handleChange = (evt) => {
  const { color, fabric, accessory,  style, size  } = evt.target;
  
    setDesignData({ ...designData, [name]: value });
  };

return (

    <div>
<h1> You can create your own Abaya </h1>
<form onSubmit={handleSubmit}>
  {/* Color */}
  <label>
    Color:{" "}
    <select name="color" value={designData.color} onChange={handleChange} required>
      <option value="">Choose Color</option>
      <option value="black">Black</option>
      <option value="white">White</option>
      <option value="blue">Blue</option>
    </select>
  </label>
  <br /><br />

  {/* Fabric */}
  <label>
    Fabric:{" "}
    <select value={designData.fabric} onChange={handleChange} required>
      <option value="">Choose Fabric</option>
      <option value="cotton">Cotton</option>
      <option value="silk">Silk</option>
      <option value="chiffon">Chiffon</option>
    </select>
  </label>
  <br /><br />

  {/* Accessory */}
  <label>
    Accessory:{" "}
    <select value={designData.accessory} onChange={handleChange} required>
      <option value="">Choose Accessory</option>
      <option value="beads">Beads</option>
      <option value="embroidery">Embroidery</option>
      <option value="none">None</option>
    </select>
  </label>
  <br /><br />

  {/* Style */}
  <label>
    Style:
    <select value={designData.style} onChange={handleChange} required>
      <option value="">Select Style</option>
      <option value="classic">Classic</option>
      <option value="modern">Modern</option>
      <option value="openFront">Open Front</option>
    </select>
  </label>
  <br /><br />

  {/* Size */}
  <label>
    Size:
    <select value={designData.size} onChange={handleChange} required>
      <option value="">Select Size</option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  </label>
  <br /><br />

  <button type="submit">Submit</button>
  <button type="button" onClick={() => navigate("/")}>
    Back
  </button>
</form>



    </div>
)



}

export default Custom;
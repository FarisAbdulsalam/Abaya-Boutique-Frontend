import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router';
import * as customService from '../../services/customService';
import './Custom.css'

const Custom = ({ customOptions, setCustomOptions }) => {

  const navigate = useNavigate();

const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user._id;
    
    await customService.create(userId, ...customOptions);
      customOptions({ color, fabric, accessory, style, size });
      navigate("/preview");

    } catch (err) {
      console.error("Error creating custom design:", err.message);
    }
}

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;

    if (type === "checkbox") {
      let updatedAccessories = customOptions.accessory || [];
      if (checked) {
        updatedAccessories = [...updatedAccessories, value];
      } else {
        updatedAccessories = updatedAccessories.filter((item) => item !== value);
      }
      setCustomOptions({ ...customOptions, accessory: updatedAccessories });
    } else {
      setCustomOptions({ ...customOptions, [name]: value });
    }
  };

return (

     <div className="custom-container">
     <h1> You can create your own Abaya </h1>
    <form onSubmit={handleSubmit}>
      {/* Color */}

  <label>Choose Abayas Color:{" "} </label>
      {/* <h2></h2> */}
     <div id="colors">
          <button
            type="button"
            className="color-btn btn"
            id="N"
            style={{ backgroundColor: "#1C1C2D", color: "#fff" }}
            onClick={() => setCustomOptions({ ...customOptions, color: "Navy Black" })}
          >
            Navy Black
          </button>
          <button
            type="button"
            className="color-btn btn"
            id="C"
            style={{ backgroundColor: "#4B4B4B", color: "#fff" }}
            onClick={() => setCustomOptions({ ...customOptions, color: "Charcoal Gray" })}
          >
            Charcoal Gray
          </button>
          <button
            type="button"
            className="color-btn btn"
            id="G"
            style={{ backgroundColor: "#3C4F3F", color: "#fff" }}
            onClick={() => setCustomOptions({ ...customOptions, color: "Dark Olive Green" })}
          >
            Dark Olive Green
          </button>
          <button
            type="button"
            className="color-btn btn"
            style={{ backgroundColor: "#D4BFAA" }}
            id="S"
            onClick={() => setCustomOptions({ ...customOptions, color: "Sandy Beige" })}
          >
            Sandy Beige
          </button>
        </div>

        <br /><br />
 

  {/* Fabric */}
  <label>
    Fabric:{" "}
    <select name="fabric" value={customOptions.fabric} onChange={handleChange} id="fabric" class="form-control" required>
            <option value="">Select Fabric</option>
            <option value="Linen">Linen</option>
            <option value="Cotton">Cotton</option>
            <option value="Chiffon">Chiffon</option>
    </select>
 </label>
  <br /><br />

  {/* Accessory */}
  {/* <label> */}
    Accessory:{" "}
     <div className="addons mb-3">
        <label><input type="checkbox" id="E" value="embroidery" checked={customOptions.accessory?.includes("Embroidery") || false}
      onChange={handleChange}/> Embroidery</label><br />
        <label><input type="checkbox" id="L" value="lacetrim" checked={customOptions.accessory?.includes("lacetrim") || false}
      onChange={handleChange}/> Lace trim</label><br />
        <label><input type="checkbox" id="B" value="belt" checked={customOptions.accessory?.includes("belt") || false}
      onChange={handleChange}/> Belt</label>
    </div>

  <br /><br />

  
  {/* Size */}

      
     <label>
          Size:
          <select
            name="size"
            value={customOptions.size || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

  <br /><br />
  

  {/* Style */}
  
    Style:{" "}
    {/* <select value={customOptions.style} onChange={handleChange} required>
      <option value="">Select Style</option>
      <option value="classic">Classic</option>
      <option value="modern">Modern</option>
      <option value="openFront">Open Front</option>
    </select> */}
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
  <label
    style={{ textAlign: "center", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <input type="radio" name="style" value="Open Abaya" onChange={handleChange} />
    <img src="/img/1.jpg" alt="Open Abaya" width="100" />
    <span>Open Abaya</span>
  </label>

  <label
    style={{ textAlign: "center", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <input type="radio" name="style" value="Cross-Over Abaya" onChange={handleChange} />
    <img src="/img/2.jpg" alt="Cross-Over Abaya" width="100" />
    <span>Cross-Over Abaya</span>
  </label>

  <label
    style={{ textAlign: "center", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <input type="radio" name="style" value="Blazer Style Abaya" onChange={handleChange} />
    <img src="/img/5.jpg" alt="Blazer Style Abaya" width="100" />
    <span>Blazer Style Abaya</span>
  </label>
</div>

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
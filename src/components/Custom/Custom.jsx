import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router';

const Custom = ({ customOptions, setCustomOptions }) => {

  const navigate = useNavigate();
 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    customOptions({ color, fabric, accessory, style, size });
    navigate("/preview");

  };

 const handleChange = (evt) => {
  const { name,value } = evt.target;
  
    setCustomOptions({ ...customOptions, [name]: value });
  };

return (

    <div>
<h1> You can create your own Abaya </h1>
<form onSubmit={handleSubmit}>
  {/* Color */}
  <label>
   
      <h2>Choose Abayas Color</h2>
     <div id="colors">
          <button
            type="button"
            className="color-btn btn"
            style={{ backgroundColor: "#1C1C2D", color: "#fff" }}
            onClick={() => setCustomOptions({ ...customOptions, color: "Navy Black" })}
          >
            Navy Black
          </button>
          <button
            type="button"
            className="color-btn btn"
            style={{ backgroundColor: "#4B4B4B", color: "#fff" }}
            onClick={() => setCustomOptions({ ...customOptions, color: "Charcoal Gray" })}
          >
            Charcoal Gray
          </button>
          <button
            type="button"
            className="color-btn btn"
            style={{ backgroundColor: "#3C4F3F", color: "#fff" }}
            onClick={() => setCustomOptions({ ...customOptions, color: "Dark Olive Green" })}
          >
            Dark Olive Green
          </button>
          <button
            type="button"
            className="color-btn btn"
            style={{ backgroundColor: "#D4BFAA" }}
            onClick={() => setCustomOptions({ ...customOptions, color: "Sandy Beige" })}
          >
            Sandy Beige
          </button>
        </div>

        <br /><br />

    {/* <select name="color" value={customOptions.color} onChange={handleChange} required>
      <option value="">Choose Abaya Color</option>
      <option value="Navy Black">Navy Black</option>
      <option value="Dark Olive Green">Dark Olive Green</option>
      <option value="Sandy Beige">Sandy Beige</option>
    </select> */}
  </label>
  <br /><br />

  {/* Fabric */}
  <label>
    Fabric:{" "}
    <select name="fabric" value={customOptions.fabric} onChange={handleChange} required>
            <option value="">Select Fabric</option>
            <option value="Linen">Linen</option>
            <option value="Cotton">Cotton</option>
            <option value="Chiffon">Chiffon</option>
    </select>
  </label>
  <br /><br />

  {/* Accessory */}
  <label>
    Accessory:{" "}
    <select name="accessory" value={customOptions.accessory} onChange={handleChange} required>
      <option value="">Add </option>
      <option value="lace">Lace trim</option>
      <option value="embroidery">Embroidery</option>
      <option value="belt">Belt</option>
      <option value="none">None</option>
    </select>
  </label>
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
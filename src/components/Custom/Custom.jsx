import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as customService from "../../services/customService";
import { getUser } from "../../services/authService";
import * as cartService from "../../services/cartService";
import "./Custom.css";

const Custom = ({ customOptions, setCustomOptions }) => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = getUser();
    if (!user) {
      return;
    }
    const customAbaya = {
      _id: Date.now().toString(),
      type: "custom",
      title: "Custom Abaya",
      size: customOptions.size,
      price: 50,
      image:imageSrc,
      ...customOptions,
    };
    cartService.addCustomAbayaToCart(user._id, customAbaya);
    navigate("/cart");
  };

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;

    if (type === "checkbox") {
      let updatedAccessories = customOptions.accessory || [];
      if (checked) {
        updatedAccessories = [...updatedAccessories, value];
      } else {
        updatedAccessories = updatedAccessories.filter(
          (item) => item !== value
        );
      }
      setCustomOptions({ ...customOptions, accessory: updatedAccessories });
    } else {
      setCustomOptions({ ...customOptions, [name]: value });
    }
  };

  const buildImageName = () => {
    if (!customOptions.color || !customOptions.style) return "";

    const colorMap = {
      "Navy Black": "N",
      "Charcoal Gray": "C",
      "Dark Olive Green": "G",
      "Sandy Beige": "S",
    };

    const styleMap = {
      "Open Abaya": "O",
      "Cross-Over Abaya": "C",
      "Blazer Style Abaya": "B",
    };

    const colorId = colorMap[customOptions.color];
    const styleId = styleMap[customOptions.style];

    let accessoriesIds = [];
    if (customOptions.accessory && customOptions.accessory.length > 0) {
      if (customOptions.accessory.includes("embroidery"))
        accessoriesIds.push("E");
      if (customOptions.accessory.includes("lacetrim"))
        accessoriesIds.push("L");
      if (customOptions.accessory.includes("belt")) accessoriesIds.push("B");
    } else {
      accessoriesIds.push("N");
    }

    const accessoryPart = accessoriesIds.join("-");

    //
    const fileName = `${colorId}-${styleId}-${accessoryPart}.png`;
    return fileName;
  };

  useEffect(() => {
    const imgName = buildImageName();
    if (imgName) {
      setImageSrc(`/images/${imgName}`);
    } else {
      setImageSrc("");
    }
  }, [customOptions]);

  return (
    <div className="custom-container">
      <h1>You can create your own Abaya</h1>
      <form onSubmit={handleSubmit}>
        <label>Choose Abayas Color: </label>
        <div id="colors">
          <button
            type="button"
            className="color-btn btn"
            id="N"
            style={{ backgroundColor: "#1C1C2D", color: "#fff" }}
            onClick={() =>
              setCustomOptions({ ...customOptions, color: "Navy Black" })
            }
          >
            Navy Black
          </button>
          <button
            type="button"
            className="color-btn btn"
            id="C"
            style={{ backgroundColor: "#4B4B4B", color: "#fff" }}
            onClick={() =>
              setCustomOptions({ ...customOptions, color: "Charcoal Gray" })
            }
          >
            Charcoal Gray
          </button>
          <button
            type="button"
            className="color-btn btn"
            id="G"
            style={{ backgroundColor: "#3C4F3F", color: "#fff" }}
            onClick={() =>
              setCustomOptions({ ...customOptions, color: "Dark Olive Green" })
            }
          >
            Dark Olive Green
          </button>
          <button
            type="button"
            className="color-btn btn"
            id="S"
            style={{ backgroundColor: "#D4BFAA" }}
            onClick={() =>
              setCustomOptions({ ...customOptions, color: "Sandy Beige" })
            }
          >
            Sandy Beige
          </button>
        </div>
        <br />
        <br />
        <label>
          Fabric:{" "}
          <select
            name="fabric"
            value={customOptions.fabric || ""}
            onChange={handleChange}
            id="fabric"
            className="form-control"
            required
          >
            <option value="">Select Fabric</option>
            <option value="Linen">Linen</option>
            <option value="Cotton">Cotton</option>
            <option value="Chiffon">Chiffon</option>
          </select>
        </label>
        <br />
        <br />
        Accessory: <br />
        <br />
        <div className="addons mb-3">
          <label>
            <input
              type="checkbox"
              id="E"
              value="embroidery"
              checked={customOptions.accessory?.includes("embroidery") || false}
              onChange={handleChange}
            />{" "}
            Embroidery
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              id="L"
              value="lacetrim"
              checked={customOptions.accessory?.includes("lacetrim") || false}
              onChange={handleChange}
            />{" "}
            Lace trim
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              id="B"
              value="belt"
              checked={customOptions.accessory?.includes("belt") || false}
              onChange={handleChange}
            />{" "}
            Belt
          </label>
        </div>
        <br />
        <br />
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
        <br />
        <br />
        Style:{" "}
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <label
            style={{
              textAlign: "center",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="radio"
              name="style"
              value="Open Abaya"
              id="O"
              onChange={handleChange}
              checked={customOptions.style === "Open Abaya"}
            />
            <img src="/img/1.jpg" alt="Open Abaya" width="100" />
            <span>Open Abaya</span>
          </label>

          <label
            style={{
              textAlign: "center",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="radio"
              name="style"
              value="Cross-Over Abaya"
              id="C"
              onChange={handleChange}
              checked={customOptions.style === "Cross-Over Abaya"}
            />
            <img src="/img/2.jpg" alt="Cross-Over Abaya" width="100" />
            <span>Cross-Over Abaya</span>
          </label>

          <label
            style={{
              textAlign: "center",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="radio"
              name="style"
              value="Blazer Style Abaya"
              id="B"
              onChange={handleChange}
              checked={customOptions.style === "Blazer Style Abaya"}
            />
            <img src="/img/5.jpg" alt="Blazer Style Abaya" width="100" />
            <span>Blazer Style Abaya</span>
          </label>
        </div>
        <br />
        <br />
        {imageSrc && (
          <div style={{ textAlign: "center" }}>
            <h3>Preview</h3>
            <img
              src={imageSrc}
              alt="Custom Abaya Preview"
              style={{
                maxWidth: "300px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        )}
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>
          Back
        </button>
      </form>
    </div>
  );
};

export default Custom;

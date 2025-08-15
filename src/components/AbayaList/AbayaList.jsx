import React from "react";
import { Link } from "react-router";
import "./AbayaList.css";

const AbayaList = (props) => {
  return (
    <>
      {props.isAdmin && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to="/abaya/new" className="new-abaya-link">
            <h2>Add New Abaya</h2>
          </Link>{" "}
        </div>
      )}
      <div className="abaya-list">
        {!props.abayas.length ? (
          <h2 className="no-abayas">No abayas Yet!</h2>
        ) : (
          <div className="abaya-cards-box">
            <div className="abaya-container">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginTop: "80px",
                }}
              >
                {props.abayas.map((abaya) => (
                  <Link
                    to={`/abaya/${abaya._id}`}
                    key={abaya._id}
                    onClick={() => props.handleSelect(abaya)}
                    className="abaya-card"
                  >
                    <img
                      src={`http://localhost:3001${abaya.image}`}
                      alt={abaya.title}
                    />
                    <h3>{abaya.title}</h3>
                    <p>{abaya.price} BD</p>
                  </Link>
                ))}
              </div>{" "}
            </div>{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default AbayaList;

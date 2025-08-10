import React from 'react';
import { Link } from 'react-router-dom';
import './AbayaList.css';

const AbayaList = (props) => {
  return (
    <div className="abaya-list">
      <h1>Abaya List</h1>
      {!props.abayas.length ? (
        <h2 className="no-abayas">No abayas Yet!</h2>
      ) : (
        <div className="abaya-container">
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
        </div>
      )}
      <Link to="/abaya/new" className="new-abaya-link">
        Add New Abaya
      </Link>
    </div>
  );
};

export default AbayaList;

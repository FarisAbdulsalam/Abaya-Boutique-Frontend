import React from 'react';
import { Link } from 'react-router';

const AbayaList = (props) => {
  console.log(props);

  return (
    <>
      <h1>AbayaList</h1>
      {!props.abayas.length ? (
        <h2>No abayas Yet!</h2>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {props.abayas.map((abaya) => (
            <Link to ={`/abaya/${abaya._id}`}
              key={abaya._id}
              onClick={() => props.handleSelect(abaya)}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '10px',
                width: '180px',
                textAlign: 'center',
                boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
              }}>
                <img
                  src={`http://localhost:3001${abaya.image}`}
                  alt={abaya.title}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '10px',
                  }} 
                />
              <h3 style={{ margin: '0 0 5px 0' }}>{abaya.title}</h3>
              <p style={{ margin: 0, color: '#555' }}>{abaya.price} BD</p>
            </Link>
          ))}
        </div>
      )}
        <Link to="/abaya/new">New Abaya</Link>
    </>
  );
};

export default AbayaList;
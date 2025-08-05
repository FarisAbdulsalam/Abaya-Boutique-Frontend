import React from 'react'

const AbayaList = (props) =>{
  console.log(props);


  return (
    <>
    <h1>AbayaList</h1>
    <div>
      {!props.abayas.length ? (
       <h2>No abayas Yet !</h2>
      ):(
      <ul>
        {props.abayas.map((abaya) => (
          <li 
              key={abaya._id}
              onClick={() => props.handleSelect(abaya)}
            >  {abaya.image} {abaya.title} {abaya.price}</li>
        ))}
      </ul>
      )}
    </div>
    <button onClick={props.handleFormView}>
      {/* Ternary Operator */}
      {props.isFormOpen ? 'close Form' : 'New abaya'}
    </button>
    
    
    
    </>

  )
}


export default AbayaList

import React from 'react';
import "./name.css";

function Name({name, index}) {

  return (
    <div className="nameCard"
     style={{cursor: "default", background: "grey", color: "white"}}>
        <div className='name'>{name}</div>
    </div>
    
  )
}

export default Name
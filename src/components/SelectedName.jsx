import React from 'react';
import "./name.css";

function Name({name}) {

  return (
    <div className="nameCard"
    style={{cursor: "default"}}>
        <div className='name' style={{cursor: "default"}}>{name}</div>
    </div>
    
  )
}

export default Name
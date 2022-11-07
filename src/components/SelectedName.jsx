import React from 'react';
import "./name.css";

function Name({name, index}) {

  return (
    <div className="nameCard"
    style={{cursor: "default"}}>
        <div className='name' style={{cursor: "default"}}>{index + 1} {name}</div>
    </div>
    
  )
}

export default Name
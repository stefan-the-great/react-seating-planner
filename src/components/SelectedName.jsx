import React from 'react';
import "../styles/name.css";

function SelectedName({id, name}) {

  return (
    <div className="nameCard"
        style={{border: "0.5px solid rgba(0, 0, 0, 0)", cursor: "default"}}>
            <div className="removeBtn"></div>
        <div className='name'>{name}</div>
    </div>
    
  )
}

export default SelectedName
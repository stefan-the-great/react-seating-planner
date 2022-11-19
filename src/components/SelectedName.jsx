import React from 'react';
import "../styles/name.css";
import "../styles/selectedName.css";
import {ReactComponent as CloseIcon} from "../images/Close.svg"

function SelectedName({id, name, removeFromTable}) {

  return (
    <div className="nameCard selected"
        style={{border: "0.5px solid rgba(0, 0, 0, 0)", cursor: "default"}}>
          <div className="removeFunc" onClick={() => removeFromTable(id)}>
            <CloseIcon/>
          </div>
        <div className='name'>{name}</div>
    </div>
    
  )
}

export default SelectedName
import React from 'react';
import "./name.css";
import { useDrag } from "react-dnd";

function Name({id, name}) {

    const [{isDragging}, drag] = useDrag(() => ({
        type: "text",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
  return (
    <div className="nameCard"
        ref={drag} 
        style={{border: isDragging ? "0.5px solid rgba(0, 0, 0, 0.5)" : "0.5px solid rgba(0, 0, 0, 0)"}}>
        <div className='name'>{name}</div>

    </div>
    
  )
}

export default Name
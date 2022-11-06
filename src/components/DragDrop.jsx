import React, { useState } from 'react';
import Name from './Name';
import SelectedName from './SelectedName'
import { useDrop } from "react-dnd";
import "../App.css";

// const NameList = ["Chrismal", "Priyanka", "Chrishcale", "Kalum"]
const NameList = [
    {
        id: 1,
        name: "Chrismal Panditharatne",
    },
    {
        id: 2,
        name: "Priyanka Panditharatne",
    },
    {
        id: 3,
        name: "Chrischale Panditharatne",
    },
    {
        id: 4,
        name: "Kalum Panditharatne",
    },
]

function DragDrop() {

    const [Table, setTable] = useState([]);
    
    const [{ isOver }, drop] = useDrop(() => ({
       accept: "text",
       drop: (item) => addNameToTable(item.id),
       collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addNameToTable = (id) => {
        const nameList = NameList.filter((name) => id === name.id);
        setTable((table) => [...table, nameList[0]]);

    }


  return (
    <div className='outerWrapper'>
        <div className="nameList">
            {NameList.map(name => {
                return<Name id={name.id} name={name.name} />
            })}
        </div>
        <br />
        <div className="table" ref={drop}>
            {Table.map(name => {
                return<SelectedName id={name.id} name={name.name} />
            })}
        </div>
    </div>
  )
}

export default DragDrop
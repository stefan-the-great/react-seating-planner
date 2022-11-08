import React, { useState } from 'react';
import SelectedName from './SelectedName';
import { useDrop } from "react-dnd";

const tableSize = 10;

function Table({nameList}) {

    const [Table, setTable] = useState([]);
//     const [nameList, updateNameList] = useState([
//     {
//         id: 1,
//         name: "Chrismal Panditharatne",
//     },
//     {
//         id: 2,
//         name: "Priyanka Panditharatne",
//     },
//     {
//         id: 3,
//         name: "Chrischale Panditharatne",
//     },
//     {
//         id: 4,
//         name: "Kalum Panditharatne",
//     },
// ])
    const [tableLength, setTableLength] = useState(0);
    
    const [{ isOver }, drop] = useDrop(() => ({
       accept: "text",
       drop: (item) => addNameToTable(item.id),
       collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));


    const addNameToTable = (id) => {    
        if (tableLength <= 4) {
            const namedList = nameList.filter((name) => id === name.id);


            setTable((table) => [...table, namedList[0]]);
            setTableLength(prvState => prvState + 1);
        }
    }
    

  return (
    <div className="table" 
        ref={drop}
        style={{boxShadow: isOver ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" : "0px 0px 0px rgba(0, 0, 0, 0)"}}>
        <div className="innerWrapper">
            <div className="peopleNum">
                {tableLength}
            </div>
            <div className="peopleName">
            {Table.slice(0, tableSize).map((name, index) => {
                return<SelectedName id={name.id} name={name.name} index={index} />
            })}
            </div>
        </div>
    </div>
  )
}

export default Table
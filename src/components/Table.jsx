import React, {useState } from 'react';
import Name from './Name';
// import SelectedName from './SelectedName';
import { useDrop } from "react-dnd";

const tableSize = 10;

function Table({nameList, setNameList}) {

    const [Table, setTable] = useState([]);
    const [tableLength, setTableLength] = useState(0);
    
    const [{ isOver }, drop] = useDrop(() => ({
       accept: "text",
       drop: (item) => {addNameToTable(item.id)},
       collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));


    const addNameToTable = (id) => {    
        const namedList = nameList.filter((name) => id === name.id);

        setTable((table) => [...table, namedList[0]]);
        setTableLength(prvState => prvState + 1);
        setNameList(list => list.filter((name) => id !== name.id));
    }
 
  return (
    <div className="table" 
        ref={tableLength < tableSize ? drop : null}
        style={{boxShadow: isOver ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" : "0px 0px 0px rgba(0, 0, 0, 0)"} &&
            {background: tableLength >= tableSize ? "rgba(253, 152, 152, 0.5)" : "240, 240, 240, 0.5"}}>
        <div className="innerWrapper">
            {tableLength >= tableSize ? 
                (<div className="peopleNum"
                style={{color: "red"}}>
                    {tableSize}
                </div>) : 
                (<div className="peopleNum"
                style={{color: "green"}}>
                    {tableLength}
                </div>)}
            
            
            <div className="peopleName">
                {Table.slice(0, tableSize).map((name, index) => {
                    return<Name key={index} id={name.id} name={name.name} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Table
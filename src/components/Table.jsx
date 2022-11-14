import React from 'react';
import { useDrop } from "react-dnd";
import Name from './Name';
import "../styles/table.css"

const tableSize = 10;

function Table({tableKey, nameList, setNameList, tableNum, tableData, setAllTables}) {

    const tableLength = tableData.length
    
    const [{ isOver }, drop] = useDrop(() => ({
       accept: "text",
       drop: (item) => {addNameToTable(item.id)},
       collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addNameToTable = (id) => {    
        const namedList = nameList.filter((name) => id === name.id);

        setNameList(list => list.filter((name) => id !== name.id));
        setAllTables(table => {
            table[tableKey] = [...table[tableKey], namedList[0]];
            return table
        });
    }
 
  return (
    <div className="table" 
        ref={tableLength < tableSize ? drop : null}
        style={{boxShadow: isOver ? "inset 0px 0px 5px 1px rgba(255, 255, 255, 1)" : "0px 0px 0px rgba(0, 0, 0, 0)"}}>
        <div className="innerWrapper">
            <div className="tableDetails">
                <div className="tableName">Table {tableNum}</div>
                <div className="peopleNum" style={{color: tableLength >= tableSize ? "red" :"limegreen"}}>
                    {tableLength}
                </div>
            </div>
            
            <div className="peopleName">
                {tableData.map((name, index) => {
                    console.log(name.id);
                    return<Name key={index} id={name.id} name={name.name} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Table
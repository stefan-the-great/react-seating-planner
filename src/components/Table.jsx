import React, { useState } from 'react';
import { useDrop } from "react-dnd";
import Name from './Name';
import "../styles/table.css"

const tableSize = 10;

function Table({tableKey, nameList, setNameList, tableNum, tableData, allTables, setAllTables}) {

    const [Table, setTable] = useState(tableData);
    
    const [{ isOver }, drop] = useDrop(() => ({
       accept: "text",
       drop: (item) => {addNameToTable(item.id)},
       collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addNameToTable = (id) => {    
        const namedList = nameList.filter((name) => id === name.id);
        // const currTable = allTables.filter((table, index) => index === tableKey);
        
        // currTable[0].push(namedList[0]);
        // console.log(allTables);


        // console.log(allTables.filter((table, index) => index !== tableKey));

        setTable((table) => [...table, namedList[0]]);
        setNameList(list => list.filter((name) => id !== name.id));
        // setAllTables((table) => [...table, table[tableKey]]);
        setAllTables(table => {
            // console.log(table[tableKey]);
            table[tableKey] = [...table[tableKey], namedList[0]];
            return table
        });

        console.log(allTables);

    }
 
  return (
    <div className="table" 
        ref={Table.length < tableSize ? drop : null}
        style={{boxShadow: isOver ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" : "0px 0px 0px rgba(0, 0, 0, 0)"}}>
        <div className="innerWrapper">
            <div className="tableDetails">
                <div className="tableName">Table {tableNum}</div>
                <div className="peopleNum" style={{color: Table.length >= tableSize ? "red" :"green"}}>
                    {Table.length}
                </div>
            </div>
            
            <div className="peopleName">
                {Table.map((name, index) => {
                    return<Name key={index} id={name.id} name={name.name} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Table
import React, { useState } from 'react';
import { useDrop } from "react-dnd";
// import Name from './Name';
import "../styles/table.css"
import SelectedName from './SelectedName';
import TableSettings from './TableSettings';

function Table({tableKey, nameList, setNameList, tableData, allTables, setAllTables}) {

    const [tableName, setTableName] = useState(tableKey);
    const [tableSize, setTableSize] = useState(10);
    const tableLength = tableData.length
    
    const [{ isOver }, drop] = useDrop(() => ({
       accept: "text",
       drop: (item) => {addNameToTable(item.id)},
       collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addNameToTable = (id) => {    
        // Get person by name.id
        let person = nameList.filter((name) => id === name.id);

        // Removing person from nameList state and adding it to allTables 
        setNameList(list => list.filter((name) => id !== name.id));
        setAllTables(table => {
            table[tableKey] = [...table[tableKey], person[0]];
            return table
        });
    }

    // removeFromTable is used in SelectedName component 
    const removeFromTable = (id) => {
        // Step 01
        // Find the person from the table
        let person = allTables[tableKey].filter((name) => id === name.id);
        
        // Add person to nameList (list on the screen left)
        setNameList(list => [person[0], ...list]);
        
        // Find and Remove the person from the current table
        setAllTables(table => {
            table[tableKey] = table[tableKey].filter((name) => id !== name.id);
            return table});
    }

 
  return (
    <div className="table" 
        ref={tableLength < tableSize ? drop : null}
        style={{boxShadow: isOver ? "inset 0px 0px 5px 1px rgba(255, 255, 255, 1)" : "0px 0px 0px rgba(0, 0, 0, 0)"}}>
        <div className="innerWrapper">
            {/* <div className="tableDetails">
                <div className="tableName">Table {tableKey + 1}</div>
                <div className="peopleNum" style={{color: tableLength >= tableSize ? "red" :"limegreen"}}>
                    {tableLength}
                </div>
            </div> */}
            <TableSettings tableName={tableName} 
                setTableName={setTableName} 
                tableSize={tableSize} 
                setTableSize={setTableSize} 
                tableLength={tableLength}
                allTables={allTables}
                setAllTables={setAllTables} />
            
            <div className="peopleName">
                {tableData.map((name, index) => {
                    if (name.rsvp !== "Declined") {
                        return<SelectedName key={index} id={name.id} name={name.name + " " + name.surname} removeFromTable={removeFromTable} />
                        
                    } else {
                        return "";
                    }
                })}
            </div>
        </div>
    </div>
  )
}

export default Table
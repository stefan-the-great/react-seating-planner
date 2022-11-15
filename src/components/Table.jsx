import React from 'react';
import { useDrop } from "react-dnd";
// import Name from './Name';
import "../styles/table.css"
import SelectedName from './SelectedName';

const tableSize = 10;

function Table({tableKey, nameList, setNameList, tableData, allTables, setAllTables}) {

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
        console.log("Person: ", person.length);

        if (person.length === 0) {
            // console.log(allTables);
            person = allTables.filter((table, index) => (findPerson(table, index, id)));
            person = person[1];
            console.log("Person allTableFilter: ", person[0]);
        }


        // Removing person from nameList state and adding it to allTables 
        setNameList(list => list.filter((name) => id !== name.id));
        setAllTables(table => {
            table[tableKey] = [...table[tableKey], person[0]];
            return table
        });
    }

    const findPerson = (table, index, id) => {
        console.log("--- findPerson ---");
        console.log(index);
        console.log(id);
        console.log(table);
        let foundPerson = table.filter((name) => id === name.id);
        return foundPerson;
    };

 
  return (
    <div className="table" 
        ref={tableLength < tableSize ? drop : null}
        style={{boxShadow: isOver ? "inset 0px 0px 5px 1px rgba(255, 255, 255, 1)" : "0px 0px 0px rgba(0, 0, 0, 0)"}}>
        <div className="innerWrapper">
            <div className="tableDetails">
                <div className="tableName">Table {tableKey + 1}</div>
                <div className="peopleNum" style={{color: tableLength >= tableSize ? "red" :"limegreen"}}>
                    {tableLength}
                </div>
            </div>
            
            <div className="peopleName">
                {console.log("Table Num: ", tableKey + 1)}
                {console.log(tableData)}
                {tableData.map((name, index) => {
                    return<SelectedName key={index} id={name.id} name={name.name} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Table
import React, { useState, useEffect } from 'react';
import Name from './Name';
import "../styles/App.css";
import Table from './Table';
import AddTable from './AddTable';
import ExportData from './ExportData';
import FormatNameInput from './utils/FormatNameInput';
// import CSV from '../GuestList.csv'

const peopleData = require("../random-dataset.json");
const seatedPeople = require("../SeatedPeople.json");


function DragDrop() {

    const [nameList, setNameList] = useState(peopleData);
    const [nameListLength, setNameListLength] = useState()
    const [allTables, setAllTables] = useState(seatedPeople);
    const [nameInput, setNameInput] = useState('')

    useEffect(() => {
        allTables.forEach(table => {
            table.forEach(person => {
                setNameList(list => list.filter((name) => name.id !== person.id))
            })            
        });     

        
    }, [])
    
    useEffect(() => {
        setNameListLength(nameList.length)
      
    }, [])
    
    const handleNameInputChange = (e) => {
        setNameInput(e.target.value)
    }

    const handleNameInputSubmit = () => {
        console.log(nameInput);
        console.log(nameListLength);
        
        var newItemIndex = nameListLength + 1
        var formattedNameInput = FormatNameInput(newItemIndex, nameInput);
        // var newList = nameList.push(nameInput);

        setNameList((nameList) => ([...nameList, formattedNameInput]));

    }

  return (
    <div className="outerWrapper">
        <div className="nameList">
            <div className="names">
                {/* Name input */}
                <div className="inputWrapper">
                    <input type="text" className="nameInput" value={nameInput} onChange={handleNameInputChange} id="nameInput" />
                    <div className="submitBtn" onClick={handleNameInputSubmit}>
                        Add
                    </div>
                </div>
                <div className='nameListWrapper'>
                {nameList.map((name) => {
                    if (name.rsvp !== "Declined") {
                        return <Name key={name.id} id={name.id} name={name.name + " " + name.surname} />
                    }
                    else{
                        return ""
                    }
                })}
                </div>

            </div>
        </div>


        <div className="right">
            <ExportData allTables={allTables}/>
            
            <div className="tables">
                {allTables.map((table, index) => {
                    return <Table key={index} 
                        tableKey={index} 
                        nameList={nameList} 
                        setNameList={setNameList}
                        tableData={table}
                        allTables={allTables}
                        setAllTables={setAllTables} />
                })}
                
                <AddTable nameList={nameList} setNameList={setNameList} setAllTables={setAllTables} />

            </div>
        </div>
    </div>
  )
};

export default DragDrop
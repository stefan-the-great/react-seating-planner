import React, { useState, useEffect } from 'react';
import Name from './Name';
import "../styles/App.css";
import Table from './Table';
import AddTable from './AddTable';
import ExportData from './ExportData';
// import CSV from '../GuestList.csv'

const peopleData = require("../random-dataset.json");
const seatedPeople = require("../SeatedPeople.json");


function DragDrop() {

    const [nameList, setNameList] = useState(peopleData);
    const [allTables, setAllTables] = useState(seatedPeople);

    useEffect(() => {
        allTables.forEach(table => {
            table.forEach(person => {
                setNameList(list => list.filter((name) => name.id !== person.id))
            })            
        });     
      
    }, [])

  return (
    <div className="outerWrapper">
        <div className="nameList">
            <div className="names">
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
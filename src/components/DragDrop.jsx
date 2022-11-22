import React, { useState } from 'react';
import Name from './Name';
import "../styles/App.css";
import Table from './Table';
import AddTable from './AddTable';
import ExportData from './ExportData';

const peopleData = require("../PeopleDataExtended.json");

let allNames = peopleData;

function DragDrop() {

    const [nameList, setNameList] = useState(allNames);
    const [allTables, setAllTables] = useState([[
    {
        "id": 0,
        "name": "Chrismal Panditharatne"
    },
    {
        "id": 1,
        "name": "Priyanka Panditharatne"
    },
    {
        "id": 2,
        "name": "Chrischale Panditharatne"
    },
    {
        "id": 3,
        "name": "Kalum Panditharatne"
    },
    {
        "id": 4,
        "name": "Malka Panditharatne"
    },
    {
        "id": 5,
        "name": "Katja Panditharatne"
    },
    {
        "id": 6,
        "name": "Kaaya Panditharatne"
    },
    {
        "id": 7,
        "name": "Madhusha Panditharatne"
    },
    {
        "id": 8,
        "name": "Damian Fernando"
    },
    {
        "id": 9,
        "name": "Sanduni Fernando"
    }
]]);


  return (
    <div className="outerWrapper">
        <div className="nameList">
            <div className="names">
                {nameList.map((name) => {
                    return <Name key={name.id} id={name.id} name={name.name} />
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
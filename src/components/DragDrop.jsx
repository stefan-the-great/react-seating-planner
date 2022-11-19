import React, { useState } from 'react';
import Name from './Name';
import "../styles/App.css";
import Table from './Table';
import AddTable from './AddTable';
import ExportData from './ExportData';

const peopleData = require("../random-dataset.json");

let allNames = peopleData;

function DragDrop() {

    const [nameList, setNameList] = useState(allNames);
    const [allTables, setAllTables] = useState([[]]);

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
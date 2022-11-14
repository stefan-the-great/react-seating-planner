import React, { useState } from 'react';
import Name from './Name';
import "../styles/App.css";
import Table from './Table';
import AddTable from './AddTable';
import ExportData from './ExportData';

let allNames = [
{ id: 3, name: "Kalum Panditharatne", seated: false},
{ id: 4, name: "Malka Panditharatne", seated: false},
{ id: 5, name: "Katja Panditharatne", seated: false},
{ id: 6, name: "Kaaya Panditharatne", seated: false},
{ id: 7, name: "Madhusha Panditharatne", seated: false},
{ id: 8, name: "Damian Fernando", seated: false},
{ id: 9, name: "Sanduni Fernando", seated: false},
{ id: 10, name: "Pearl Fonseka", seated: false},
{ id: 11, name: "Asoka ", seated: false},
{ id: 12, name: "Preenitha Gopallawa", seated: false},
{ id: 13, name: "Sampath Siriwardhana", seated: false},
{ id: 14, name: "Surakshi Siriwardhana", seated: false},
{ id: 15, name: "Roshan Fernando", seated: false},
{ id: 16, name: "Ishani Fernando", seated: false},
{ id: 17, name: "Dilruk Panditharatne", seated: false},
{ id: 18, name: "Rohini Panditharatne", seated: false},
{ id: 19, name: "Chandana De Silva", seated: false},
{ id: 20, name: "Induni De Silva", seated: false},
{ id: 21, name: "Suranga Fonseka", seated: false},
{ id: 22, name: "Priyanga Fonseka", seated: false},
{ id: 23, name: "Himansu Wickramasinghe", seated: false},
{ id: 24, name: "Sharmein Wickramasinghe", seated: false},
{ id: 25, name: "Agraja Wickramasinghe", seated: false},
{ id: 26, name: "Dulya Wickramasinghe", seated: false},
{ id: 27, name: "Indika Wickramasinghe", seated: false},
{ id: 28, name: "Susila Wickramasinghe", seated: false},
];

function DragDrop() {

    const [nameList, setNameList] = useState(allNames);
    const [allTables, setAllTables] = useState([[{ id: 0, name: "Chrismal Panditharatne", seated: false},
{ id: 1, name: "Priyanka Panditharatne", seated: false},
{ id: 2, name: "Chrischale Panditharatne", seated: false}]]);


    
    // useEffect(() => {
    //   console.log(allTables[0].length);
    // }, [allTables]);
    


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
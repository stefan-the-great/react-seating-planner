import React, { useState } from 'react';
import Name from './Name';
import "../styles/App.css";
import Table from './Table';
import AddTable from './AddTable';
import ExportData from './ExportData';

let allNames = [{
		"id": 1,
		"name": "Sasha Wallace"
	},
	{
		"id": 2,
		"name": "Chantale Stephens"
	},
	{
		"id": 3,
		"name": "Dieter Sanchez"
	},
	{
		"id": 4,
		"name": "Rana William"
	},
	{
		"id": 5,
		"name": "Isadora Cameron"
	},
	{
		"id": 6,
		"name": "Jaden Cotton"
	},
	{
		"id": 7,
		"name": "James Ford"
	},
	{
		"id": 8,
		"name": "Bernard Manning"
	},
	{
		"id": 9,
		"name": "Micah Martin"
	},
	{
		"id": 10,
		"name": "Howard Hickman"
	},
	{
		"id": 11,
		"name": "Avram Morgan"
	},
	{
		"id": 12,
		"name": "Axel Mendez"
	},
	{
		"id": 13,
		"name": "Helen Golden"
	},
	{
		"id": 14,
		"name": "Florence Hansen"
	},
	{
		"id": 15,
		"name": "Madeline Barnes"
	},
	{
		"id": 16,
		"name": "Timothy Mcdonald"
	},
	{
		"id": 17,
		"name": "Jerome Mcgowan"
	},
	{
		"id": 18,
		"name": "Colin Holman"
	},
	{
		"id": 19,
		"name": "Ava Salazar"
	},
	{
		"id": 20,
		"name": "Chantale Madden"
	},
	{
		"id": 21,
		"name": "Felicia Mendez"
	},
	{
		"id": 22,
		"name": "Elaine Ware"
	},
	{
		"id": 23,
		"name": "Addison Joyce"
	},
	{
		"id": 24,
		"name": "Byron Cortez"
	},
	{
		"id": 25,
		"name": "Samantha Raymond"
	},
	{
		"id": 26,
		"name": "Lars Hernandez"
	},
	{
		"id": 27,
		"name": "Madonna Mosley"
	},
	{
		"id": 28,
		"name": "Aileen Moran"
	},
	{
		"id": 29,
		"name": "Shannon Cash"
	},
	{
		"id": 30,
		"name": "Lara Sloan"
	}];

function DragDrop() {

    const [nameList, setNameList] = useState(allNames);
    const [allTables, setAllTables] = useState([[]]);


    
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
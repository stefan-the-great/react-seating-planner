// import React, { useState } from 'react';
import Name from './Name';
// import SelectedName from './SelectedName'
// import { useDrop } from "react-dnd";
import "../App.css";
import Table from './Table';

// const NameList = ["Chrismal", "Priyanka", "Chrishcale", "Kalum"]
const nameList = [
    {
        id: 1,
        name: "Chrismal Panditharatne",
    },
    {
        id: 2,
        name: "Priyanka Panditharatne",
    },
    {
        id: 3,
        name: "Chrischale Panditharatne",
    },
    {
        id: 4,
        name: "Kalum Panditharatne",
    },
]

// const tableSize = 10;

function DragDrop() {

//     const [Table, setTable] = useState([]);
//     const [Table2, setTable2] = useState([]);
// //     const [nameList, updateNameList] = useState([
// //     {
// //         id: 1,
// //         name: "Chrismal Panditharatne",
// //     },
// //     {
// //         id: 2,
// //         name: "Priyanka Panditharatne",
// //     },
// //     {
// //         id: 3,
// //         name: "Chrischale Panditharatne",
// //     },
// //     {
// //         id: 4,
// //         name: "Kalum Panditharatne",
// //     },
// // ])
//     const [tableLength, setTableLength] = useState(0);
//     const [tableLength2, setTableLength2] = useState(0);
    
//     const [{ isOver }, drop] = useDrop(() => ({
//        accept: "text",
//        drop: (item) => addNameToTable(item.id),
//        collect: (monitor) => ({
//             isOver: !!monitor.isOver(),
//         }),
//     }));
    
    
//     const [{ isOver2 }, drop2] = useDrop(() => ({
//        accept: "text",
//        drop: (item) => addNameToTable2(item.id),
//        collect: (monitor) => ({
//             isOver2: !!monitor.isOver(),
//         }),
//     }));


//     const addNameToTable = (id) => {    
//         if (tableLength <= 4) {
//             const namedList = nameList.filter((name) => id === name.id);


//             setTable((table) => [...table, namedList[0]]);
//             setTableLength(prvState => prvState + 1);
//         }
//     }
    
    
//     const addNameToTable2 = (id) => {    
//         if (tableLength2 <= 4) {
//             const namedList = nameList.filter((name) => id === name.id);


//             setTable2((table) => [...table, namedList[0]]);
//             setTableLength2(prvState => prvState + 1);
//         }
//     }


  return (
    <div>
        <div className="nameList">
            <div className="names">
                {nameList.map(name => {
                    return<Name id={name.id} name={name.name} />
                })}
            </div>
        </div>

        <div className="tables">
            <Table nameList={nameList}/>
            <Table nameList={nameList}/>
            <Table nameList={nameList}/>
            <Table nameList={nameList}/>
            <Table nameList={nameList}/>
            
        </div>
    </div>
  )
};

export default DragDrop
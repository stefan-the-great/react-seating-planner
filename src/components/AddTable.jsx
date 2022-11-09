import React from 'react';
import { useDrop } from "react-dnd";


function AddTable({ setAllTables, nameList, setNameList}) {

    const addNewTable = () => {
        setAllTables((tables) => [...tables, []]);
    };

    const [{ isOver }, drop] = useDrop(() => ({
       accept: "text",
       drop: (item) => {createNewTable(item.id)},
       collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const createNewTable = (id) => {
        const namedList = nameList.filter((name) => id === name.id);

        setAllTables((tables) => [...tables, [namedList[0]]]);
        setNameList(list => list.filter((name) => id !== name.id));

    };
  return (
    <div className="table" 
        ref={drop}
        style={{boxShadow: isOver ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" : "0px 0px 0px rgba(0, 0, 0, 0)"}}>
        <div className="innerWrapper center">
            <div className='addTableBtn' onClick={addNewTable}>
                <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h48v48H0z" fill="none"/>
                    <path d="M8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm32-8H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-2 18h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z" fill='#6e6e6e75'/>
                </svg>
            </div>
            <div className="addTableBtnLable">New Table</div>
            
        </div>
    </div>
  )
}

export default AddTable
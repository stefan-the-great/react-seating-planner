import React from 'react';
import { useDrop } from "react-dnd";
import {ReactComponent as AddIcon} from '../images/Add.svg' 


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
                <AddIcon/>
            </div>
            <div className="addTableBtnLable">New Table</div>
            
        </div>
    </div>
  )
}

export default AddTable
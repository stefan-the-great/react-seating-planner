import { useDroppable } from '@dnd-kit/core';
import TaskCard from '../TaskCard/TaskCard';
import './column.scss'
import { useState } from 'react';

function Column({column, tasks, setColFunc}) {
  const [colTitle, setcolTitle] = useState(column.title)

  const { setNodeRef } = useDroppable({
    id: column["id"],
  })

  const handleColNameChange = () => {
    setColFunc((columns) => columns.map(col => col.id === column["id"] ? {
      ...col, title: colTitle
    } : col))
  }

  const handleTableNameChange = (e) => {
    setcolTitle(e.target.value)
  }


  
  return (
    <div className='column' ref={setNodeRef} >
      <div className="colHeader">
        <span>Table</span>
        <input type="text" className='colNameInput' name="colName" id={colTitle} value={colTitle} onChange={handleTableNameChange} />
        <div className="colNameSubmitBtn" onClick={handleColNameChange}>Update</div>
      </div>
        {/* <h2 className='columnTitle'>
            {`Table ${colTitle}`}
        </h2> */}
        <div className="taskContainer">
        <hr />
          {tasks.map(task => {
            return <TaskCard key={task.id} task={task}/>;
          })}
        </div>
    </div>
  )
}

export default Column
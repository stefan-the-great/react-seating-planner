import { useDroppable } from '@dnd-kit/core'
import './nameList.scss'
import TaskCard from '../TaskCard/TaskCard';
import { useState } from 'react';
import FormatNameInput from '../utils/FormatNameInput';

function NameList({column, tasks, nameListLength, setTasks}) {
    const { setNodeRef } = useDroppable({
        id: column["id"],
      })

    const [nameInput, setNameInput] = useState('')

    const handleNameInputChange = (e) => {
            setNameInput(e.target.value)
        }
    
        const handleNameInputSubmit = () => {
            console.log(nameInput);
            console.log(nameListLength);
            
            var newItemIndex = nameListLength + 1
            var formattedNameInput = FormatNameInput(newItemIndex, nameInput);
            // var newList = nameList.push(nameInput);
    
            setTasks((nameList) => ([...nameList, formattedNameInput]));
    
        }
    
  return (
    <div className='column' ref={setNodeRef} >
        <h2 className='columnTitle'>
            {`Name List`}
        </h2>
        <div className="inputWrapper">
            <input type="text" className="nameInput" value={nameInput} onChange={handleNameInputChange} id="nameInput" />
            <div className="submitBtn" onClick={handleNameInputSubmit}>
                Add
            </div>
        </div>
        <div className="taskContainer">
        <hr />
            {tasks.map(task => {
            return <TaskCard key={task.id} task={task}/>;
            })}
        </div>
    </div>
  )
}

export default NameList
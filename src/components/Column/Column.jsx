import { useDroppable } from '@dnd-kit/core';
import TaskCard from '../TaskCard/TaskCard';
import './column.scss'

function Column({column, tasks}) {
  console.log(column);
  const { setNodeRef } = useDroppable({
    id: column["id"],
  })


  
  return (
    <div className='column' ref={setNodeRef} >
        <h2 className='columnTitle'>
            {`Table ${String(column["title"])}`}
        </h2>
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
import { useDraggable } from '@dnd-kit/core'
import './taskCard.scss'

function TaskCard({task}) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: task.id
  })

  const style = transform ? {
    transform: `translate(${transform.x}px, ${transform.y}px)`
  } : undefined


  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className='taskCard' style={style}>
        {task.name}
    </div>
  )
}

export default TaskCard
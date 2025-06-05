import { useState } from 'react'
import './home.scss'
import Column from '../components/Column/Column'
import AddColumn from '../components/Column/AddColumn'
import { DndContext, DragEndEvent } from '@dnd-kit/core'

const COLUMNS = [
    {id: 1, title: 1},
    {id: 2, title: 2},
    {id: 3, title: 3},
]

const INITTASKS = [
    {
        id: 1,
        name: "Stefan Fernando",
        status: 1
    },
    {
        id: 2,
        name: "Stefan Fernando",
        status: 1
    },
    {
        id: 3,
        name: "Stefan Fernando",
        status: 2
    },
    {
        id: 4,
        name: "Stefan Fernando",
        status: 2
    },
]

function Home() {
    const [tasks, setTasks] = useState(INITTASKS)
    const [columns, setColumns] = useState(COLUMNS)

    const handleAddCol = () => {
        setColumns((columns) => [...columns, {
            id: columns.length,
            title: columns.length
        }])
    }

    function handleDragEnd(event) {
        const { active, over } = event;

        if (!over) return

        const taskID = active.id;
        const newStatus = over.id;

        setTasks(() => tasks.map(task => task.id === taskID ? {
            ...task, status: newStatus
        } : task))
    }

  return (
    <div className='home'>
        <div className="colContainer">
            <DndContext onDragEnd={handleDragEnd}>

            {columns.map((column) => {
                return <Column key={column.id} column={column} tasks={tasks.filter((task) => task.status === column.id)} />
            })}
            </DndContext>
            <div className="addColWrapper" onClick={handleAddCol}>
                <AddColumn/>
            </div>
        </div>

    </div>
  )
}

export default Home
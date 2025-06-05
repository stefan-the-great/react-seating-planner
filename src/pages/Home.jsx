import { useState } from 'react'
import './home.scss'
import Column from '../components/Column/Column'
import AddColumn from '../components/Column/AddColumn'
import { DndContext, DragEndEvent, useDroppable } from '@dnd-kit/core'
import NameList from '../components/NameList/NameList'
import FormatNameInput from '../components/utils/FormatNameInput'
import TaskCard from '../components/TaskCard/TaskCard'

const COLUMNS = [
    {id: 1, title: 1},
    {id: 2, title: 2},
    {id: 3, title: 3},
]

const INITTASKS = [
    {
        id: 1,
        name: "Stefan Fernando",
        status: 0
    },
    {
        id: 2,
        name: "Josh",
        status: 0
    },
]

function Home() {
    const [tasks, setTasks] = useState(INITTASKS)
    const [columns, setColumns] = useState(COLUMNS)
    const [nameInput, setNameInput] = useState('')
    const [newIndex, setNewIndex] = useState(INITTASKS.length + 1)

    const handleAddCol = () => {
        setColumns((columns) => [...columns, {
            id: columns.length + 1,
            title: columns.length + 1
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

    const handleNameInputChange = (e) => {
        setNameInput(e.target.value)
    }

    const handleNameInputSubmit = () => {
        console.log(nameInput);
    
        setTasks((nameList) => ([...nameList, {id: newIndex, name: nameInput, status: 0}]));

        setNewIndex(newIndex+1);

    }

    
    const { setNodeRef } = useDroppable({
    id: 0,
    })

  return (
    <div className='home'>
        <div className="colContainer">
            <DndContext onDragEnd={handleDragEnd}>
                {/* <NameList key={0} column={{id: 0, title: 0}} tasks={tasks.filter((task) => task.status === 0)} nameListLength={tasks.length} setTasks={setTasks} /> */}

                <div className='column' >
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
                    {tasks.filter((task) => task.status === 0).map(task => {
                    return <TaskCard key={task.id} task={task}/>;
                    })}
                </div>
            </div>


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
import { useEffect, useState } from 'react'
import './home.scss'
import Column from '../components/Column/Column'
import AddColumn from '../components/Column/AddColumn'
import { DndContext, useDroppable } from '@dnd-kit/core'
import TaskCard from '../components/TaskCard/TaskCard'
import ConvertToCSV from '../components/utils/ConvertToCSV'
import exportFromJSON from 'export-from-json'

const COLUMNS = [
    {id: 1, title: 1}
]

const INITTASKS = []

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

    const handleGuestListExport = () => {
        // ! EXPORT GUEST LIST HERE
        const jsonData = JSON.stringify(tasks, null, 2); // Use 2 for pretty formatting
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Guest-List.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    const handleTableListExport = () => {
        // ! EXPORT GUEST LIST HERE
        const jsonData = JSON.stringify(columns, null, 2); // Use 2 for pretty formatting
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Table-List.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    useEffect(() => {
      console.log(tasks);
      
    }, [tasks])
    
    
    const { setNodeRef } = useDroppable({
    id: 0,
    })

  return (
    <div className='home'>
        <div className="exportBtnArea">
            <div className="exportBtn" onClick={handleGuestListExport}>Export Guest List</div>
            <div className="exportBtn" onClick={handleTableListExport}>Export Table List</div>
        </div>
        <div className="colContainer">
            <DndContext onDragEnd={handleDragEnd}>
                {/* <NameList key={0} column={{id: 0, title: 0}} tasks={tasks.filter((task) => task.status === 0)} nameListLength={tasks.length} setTasks={setTasks} /> */}

                <div className='column' id='nameList' ref={setNodeRef}>
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
                    return <Column key={column.id} column={column} tasks={tasks.filter((task) => task.status === column.id)} setColFunc={setColumns}  />
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
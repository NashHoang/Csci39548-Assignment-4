import { useState } from 'react'
import { TaskForm, TaskList } from './components'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Finish react project',
      completed: false,
    },
    {
      id: 2,
      description: 'Read docs',
      completed: false,
    },
    {
      id: 3,
      description: 'Submit assignment',
      completed: true,
    },
  ])

  const deleteTask = (index) => {
    setTasks((t) => t.filter((task, idx) => idx !== index))
  }

  const updateCompleted = (index, completed) => {
    setTasks(
      tasks.map((task, idx) => (idx === index ? { ...task, completed } : task)),
    )
  }
  
  const [newID, setID] = useState(4)
  const addTask = (description)=>{
    if (description.length === 0) return 
    const newTask = {
      id: newID,
      description,
      completed: false,
    }
    setTasks((prev) => [...prev, newTask])
    setID(prev => prev + 1)
  }
  const editTask = (index, newDescription) => {
    if (newDescription.length === 0) return 

    setTasks(
      tasks.map((task, idx) =>
        idx === index ? { ...task, description: newDescription } : task
      )
    )
  }
  return (
    <div>
      <TaskForm addTask={addTask}/>
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateCompleted={updateCompleted}
        editTask={editTask}
      />
    </div>
  )
}

export default App

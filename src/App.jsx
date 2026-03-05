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

  const updateTask = (index, field, value) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? {...task, [field]: value } : task,
    )
    setTasks(updatedTasks)
  }
  const updateCompleted = (index, completed) => {
    updateTask(index, 'completed', completed)
  }

  const updateDescription = (index, description) => {
    if (description.length === 0) return
    updateTask(index, 'description', description)
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


  return (
    <div>
      <TaskForm addTask={addTask}/>
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateCompleted={updateCompleted}
        updateDescription={updateDescription}
      />
    </div>
  )
}

export default App


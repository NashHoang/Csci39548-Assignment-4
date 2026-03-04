import { useState } from 'react'

const TaskForm = ({addTask}) => {
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(description)
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Task:
        <input
          name='description'
          placeholder='Enter task description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type='submit'>Add</button>
    </form>
  )
}

export default TaskForm

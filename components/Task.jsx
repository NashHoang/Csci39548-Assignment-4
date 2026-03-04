import EditDescription from './EditDescription'
import styles from './Task.module.css'
import { useState } from "react"

const Task = ({
  description,
  completed,
  deleteTask,
  updateCompleted,
  updateDescription,
  index,
}) => {
  const [editing, setEditing] = useState(false)
  const onEdit = (index,description) => {
    updateDescription(index,description)
    setEditing(false)
  }
  return (
    <div
      className={styles['task-container']}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '2px',
        gap: '10px',
      }}
    >
      <input
        type='checkbox'
        id='task-checkbox'
        checked={completed}
        onChange={(e) => updateCompleted(index, e.target.checked)}
      />
      {editing ? (
        <EditDescription 
        index={index} 
        description={description} 
        onEdit={onEdit}
        onCancel={()=>setEditing(false)}/>
      ): (
        <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {description}
      </span>
      )}
      {!completed && <button onClick={() => setEditing(true)}>Edit</button>}
      <button onClick={() => {
        deleteTask(index);
        setEditing(false);
        }}>
        Delete</button>
    </div>
  )
}

export default Task

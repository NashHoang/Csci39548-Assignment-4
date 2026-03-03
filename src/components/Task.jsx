import styles from './Task.module.css'

const Task = ({
  description,
  completed,
  deleteTask,
  updateCompleted,
  index,
}) => {
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
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {description}
      </span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  )
}

export default Task

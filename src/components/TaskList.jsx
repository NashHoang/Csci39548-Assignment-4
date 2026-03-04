import Task from './Task'

const TaskList = ({ tasks = [], deleteTask, updateCompleted, updateDescription }) => {
  if (!tasks.length) {
    return <p>No tasks to display!</p>
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          {...task}
          deleteTask={deleteTask}
          updateCompleted={updateCompleted}
          updateDescription={updateDescription}
        />
      ))}

      {tasks.length > 0 && <p>There are {tasks.length} tasks.</p>}
    </div>
  )
}

export default TaskList

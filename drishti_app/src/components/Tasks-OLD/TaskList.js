import { useState, useEffect, useCallback} from "react"


// styles
import './TripList.css'

export default function TaskList() {

  const [tasks, setTasks] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/tasks')

  // const fetchTasks = useCallback(async () => {
  //   const response = await fetch(url)
  //   const json = await response.json()
  //   setTasks(json)
  // }, [url])

  // useEffect(() => {
  //   fetchTasks()
  // }, [fetchTasks])

  // console.log(tasks)

  return (
    <div className="task-list">
      <h2>TaskList</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.id}</p>
          </li>
        ))}
      </ul>

    <div className="filters">
      <button onClick={() => setUrl('http://localhost:3000/tasks?urgency=Urgent')}>
        Urgent
      </button>
      <button onClick={() => setUrl('http://localhost:3000/tasks?urgency=Non-urgent')}>
        Non-urgent
      </button>
    </div>
    </div>
    
  )
}

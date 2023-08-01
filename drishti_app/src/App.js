import './App.css';
import { useState } from 'react'

function App() {
  const [goals, setGoals] = useState([
    {title: "run deception half", id:1},
    {title: "read all books of personal library", id:2},
    {title: "finish morning journal", id:3}
  ])

  const handleClick = (id) => {
    setGoals(goals.filter((goal) => {
      return id !== goal.id
    }))
      
    setGoals(() => {
      return goals.filter((goal) => {
        return id !== goal.id
      })
    })
    console.log(id)
  }



  return (
    <div className="App">
      <h1>Ericka's Drishti</h1>
      {goals.map((event, index) => (
        <div key={event.id}>
          <h2>{index+1} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete goal</button>
        </div>
      ))}
    </div>
  );
}

export default App;

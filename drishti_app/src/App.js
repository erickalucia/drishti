import './App.css';
import { useState } from 'react'

function App() {
  const [showGoals, setShowGoals] = useState(true)
  const [goals, setGoals] = useState([
    {title: "run deception half", id:1},
    {title: "read all books of personal library", id:2},
    {title: "finish morning journal", id:3}
  ])

  console.log(showGoals)

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
      {showGoals && (
      <div>
        <button onClick={() => setShowGoals(false)}> hide goals</button>
      </div>
      )}
      
      {!showGoals && ( <div>
        <button onClick={() => setShowGoals(true)}> show goals </button>
      </div>)}
      
      {showGoals && goals.map((event, index) => (
        <div key={event.id}>
          <h2>{index+1} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete goal</button>
        </div>
      ))}
    </div>
  );
}

export default App;

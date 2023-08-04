import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import GoalList from './components/GoalList'
import NewGoalForm from './components/NewGoalForm';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showGoals, setShowGoals] = useState(true)
  const [goals, setGoals] = useState([{title: "run deception half", id:1},
  ])


  const addGoal = (event) => {
    setGoals((prevGoals) => {
      return [...prevGoals, event]
    })
    setShowModal(false)
  }
  
  const handleClick = (id) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => {
        return id !== goal.id
      })
    })
    console.log(id)
  }



  const subtitle = "Your place for developing focus"

  return (
    <div className="App">
      
      <Title title="Ericka's Drishti" subtitle={subtitle}/>
      <Title title="Calendar" subtitle='' />
      <Title title="Goals" subtitle='' />
      

      

      {showGoals && (
        <div>
          <button onClick={() => setShowGoals(false)}> hide goals </button>
        </div>
      )}
      
      {!showGoals && ( 
        <div>
          <button onClick={() => setShowGoals(true)}> show goals </button>
        </div>
      )}

      {showGoals && <GoalList goals={goals} handleClick={handleClick}/>
      }

      {showModal && <Modal >
        <NewGoalForm addGoal={addGoal}/>
      </Modal>}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Goal</button>
      </div>

      <Title title="Notes" subtitle='' />
      <Title title="Tasks" subtitle='' />
      <Title title="Habits" subtitle='' />
      <Title title="Journal" subtitle='' />
      <Title title="21 Day Challenge" subtitle='' />
      
    </div>
  );
}

export default App;

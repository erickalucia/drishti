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

    // {title: "run deception half", id:1},
    // {title: "finish reading all books of personal library", id:2},
    // {title: "complete morning journal", id:3}

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



  // const handleClose = () => {
  //   setShowModal(false)
  // }
  // this was from when we we're closing the model from inside of it

  const subtitle = "Your place for developing focus"

  return (
    <div className="App">
      
      <Title title="Ericka's Drishti" subtitle={subtitle}/>
      {/* <Title title="calendar" subtitle='' /> */}

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
      
    </div>
  );
}

export default App;

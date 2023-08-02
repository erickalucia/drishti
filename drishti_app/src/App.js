import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import GoalList from './components/GoalList'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showGoals, setShowGoals] = useState(true)
  const [goals, setGoals] = useState([
    {title: "run deception half", id:1},
    {title: "read all books of personal library", id:2},
    {title: "finish morning journal", id:3}
  ])

  const handleClick = (id) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => {
        return id !== goal.id
      })
    })
    console.log(id)
  }

  console.log(showModal)

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "Your place for developing focus"

  return (
    <div className="App">
      
      <Title title="Ericka's Drishti" subtitle={subtitle}/>
      {/* <Title title="another title" subtitle='another subtitle' /> */}

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

      {showModal && <Modal handleClose={handleClose}>
        <h2>Join our mailing list!</h2>
        <p>Click this link for the blog</p>
      </Modal>}

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
      
    </div>
  );
}

export default App;

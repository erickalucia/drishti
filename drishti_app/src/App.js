import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Board from './components/BoardOutline'
import Modal from './components/Goals/Modal'
import GoalList from './components/Goals/GoalList'
import NewGoalForm from './components/Goals/NewGoalForm';
import NoteModal from './components/Notes/NoteModal'
import NoteList from './components/Notes/NoteList'
import NewNoteForm from './components/Notes/NewNoteForm'

function App() {
  const subtitle = "Your place for developing focus"

  // GOALS //
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
  // GOALS //

  // // NOTES //
  const [showNoteModal, setShowNoteModal] = useState(false)
  const [showNotes, setShowNotes] = useState(true)
  const [notes, setNotes] = useState([{title: "note note note", id:1},
  ])

  const addNote = (event) => {
    setNotes((prevNotes) => {
      return [...prevNotes, event]
    })
    setShowNoteModal(false)
  }
  
  const handleNoteClick = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return id !== note.id
      })
    })
    console.log(id)
  }
  // NOTES //
  
  return (
    <div className="App">
      
      <Title title="Ericka's Drishti" subtitle={subtitle}/>
      <br />
      <Board boardTitle="Calendar" boardSubtitle='' />
      <br />
      
      
      
{/* GOALS */}
      <Board boardTitle="Goals" />
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
{/* GOALS */}

<br />
{/* NOTES */}
      <Board boardTitle="Notes" />

      {showNotes && (
        <div>
          <button onClick={() => setShowNotes(false)}> hide notes </button>
        </div>
      )}
      
      {!showNotes && ( 
        <div>
          <button onClick={() => setShowNotes(true)}> show notes </button>
        </div>
      )}

      {showNotes && <NoteList notes={notes} handleClick={handleNoteClick}/>
      }

      {showNoteModal && <NoteModal >
        <NewNoteForm addNote={addNote}/>
      </NoteModal>}

      <div>
        <button onClick={() => setShowNoteModal(true)}>Add New Note</button>
      </div>

{/* NOTES */}

<br />
{/* Tasks */}
      <Board boardTitle="Tasks" />
{/* Tasks */}

<br />
{/* Habits */}
      <Board boardTitle="Habits" />
{/* Habits */}

<br />
{/* Journal */}
      <Board boardTitle="Journal" />
{/* Journal */}

<br />
{/* 21 Day Challenge */}
      <Board boardTitle="21 Day Challenge" />
{/* 21 Day Challenge */}



      
    </div>
  );
}

export default App;

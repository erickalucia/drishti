import { useState } from 'react'
import './NewNoteForm.css'

export default function NewNoteForm({ addNote }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [level, setLevel] = useState('')

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLevel('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title: title,
      date: date, 
      level: level,
      id: Math.floor(Math.random() * 10000)
      // refactor later for better random id generator
    }

    console.log(event)

    addNote(event)
    resetForm()
  }

  // const handleChange = (e) => {
  //   // console.log(e.target.value)
  //   setTitle(e.target.value)
  // }

  return (
    <form className="new-note-form" onSubmit={handleSubmit}>
      <label>
        <span>Note Title:</span>
        <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
        />
      </label>
      {/* <label>
        <span>Goal Date:</span>
        <input 
          type="date" 
          onChange={(e) => setDate(e.target.value)}
          value = {date}
        />
      </label> */}
      {/* <label>
        <span>Level:</span>
        <select onChange={(e) => setLevel(e.target.value)}>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </label> */}
      <button>Submit</button>
      {/* <p>title - {title}, date - {date}</p>
      <p onClick={resetForm}>reset the form</p> */}
    </form>
  )
}

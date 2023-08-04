import { useState } from "react"

export default function NoteList() {
  const [notes, setNotes] = useState([])

  console.log(notes)

  fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(json => setNotes(json))


  return (
    <div>
      <h2>Note List </h2>
    </div>
  )
}

// import { useState } from "react"

// export default function NoteList() {
//   const [notes, setNotes] = useState([])

//   console.log(notes)

//   fetch('http://localhost:3000/notes')
//     .then(response => response.json())
//     .then(json => setNotes(json))


//   return (
//     <div>
//       <h2>Note List </h2>
//     </div>
//   )
// }


import React from "react"

export default function NoteList({ notes, handleClick }) {
  return (
    <div>
      {notes.map((note, index) => (
        <React.Fragment key={note.id}>
          <h2>{index+1} - {note.title}</h2>
          {/* <p>Difficulty: {note.level}</p>
          <p>Complete by: {note.date}</p> */}
          <button onClick={() => handleClick(note.id)}> delete note </button>
        </React.Fragment>
      ))}
    </div>
  )
}

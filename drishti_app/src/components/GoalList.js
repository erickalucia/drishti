import React from "react"

export default function GoalList({ goals, handleClick }) {
  return (
    <div>
      {goals.map((goal, index) => (
        <React.Fragment key={goal.id}>
          <h2>{index+1} - {goal.title}</h2>
          <p>Difficulty: {goal.level}</p>
          <p>Complete by: {goal.date}</p>
          <button onClick={() => handleClick(goal.id)}> delete goal </button>
        </React.Fragment>
      ))}
    </div>
  )
}


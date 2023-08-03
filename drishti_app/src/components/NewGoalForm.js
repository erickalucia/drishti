import './NewGoalForm.css'

export default function NewGoalForm() {
  return (
    <form className="new-goal-form">
      <label>
        <span>Goal Title:</span>
        <input type="text"/>
      </label>
      <label>
        <span>Goal Date:</span>
        <input type="date" />
      </label>
      <button>Submit</button>
    </form>
  )
}

import ReactDOM from 'react-dom'
import './NoteModal'

export default function NoteModal({ children }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal">
        { children }
        {/* <button onClick={handleClose}>close</button> */}
      </div>
    </div>
  ), document.body)
}
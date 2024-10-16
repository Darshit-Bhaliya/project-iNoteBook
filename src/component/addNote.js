import React, {useContext,useState} from 'react'
import noteContext from '../Context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"",description:"",tag:"default"})

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }

    const onChange = (e) => {
        setNote({...note,[e.target.name]: e.target.value})
    }

  return (
    <div className="container my-3">
    <h2 className='text-center text-secondary'>Add notes</h2>
    <form className=''>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Add Title :
        </label>
        <input type="text" className="form-control " id="title" name="title" placeholder="Enter title" aria-describedby="emailHelp" onChange={onChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Add Description :
        </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Enter description"></textarea>      </div>
      <button type="submit" className="btn btn-primary my-2" onClick={handleClick}>
        Add note
      </button>
    </form>
    <hr className="hr hr-blurry"/>
  </div>
  )
}

export default AddNote

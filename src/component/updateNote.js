import React, { useContext, useEffect, useRef , useState} from "react";
import noteContext from "../Context/notes/noteContext";
import Noteitem from "./Noteitem";


function UpdateNote() {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: "" });
  

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title, edescription: currentNote.description , etag: currentNote.tag})
  };
  
  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const ref = useRef(null);
  const refClose = useRef(null);
  return (
    <div>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Note
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Title
                  </span>
                  <input type="text" className="form-control" placeholder="add title" id="etitle" name="etitle" value={note.etitle} aria-label="Username" aria-describedby="basic-addon1" onChange={onChange} />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Description</span>
                  <textarea type="text" className="form-control" placeholder="add description" id="edescription" name="edescription" value={note.edescription} rows="3" onChange={onChange} />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Tag
                  </span>
                  <input type="text" className="form-control" placeholder="add tag" id="etag" name="etag" aria-label="Username" value={note.etag} aria-describedby="basic-addon1" onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button onClick={handleClick} type="button" className="btn btn-primary">
                update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container row py-3 " >
        <h2 className=" text-secondary">Your Notes:</h2>
        <div className="container mx-1 fw-lighter">
        {notes.length===0 && "please add note to display"}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />;
        })}
      </div>

    </div>
    
  );
}

export default UpdateNote;

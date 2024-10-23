import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "default" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "default" })
    props.showAlert("note added","success");
  };
  const handleReset=(e)=>{
    setNote({ title: "", description: "", tag: "default" })
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleFocus=()=>{
    document.getElementById('tag').select();
  }
  return (
    
    <div className="container my-3"style={{"backgroundColor": "#f7f7f7"}}y>
      <h2 className="text-secondary  py-3">Add Note:</h2>
      <div className="d-flex justify-content-center">

        <form className="w-50" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Title
            </span>
            <input type="text" value={note.title} className="form-control" placeholder="add title" id="title" name="title" aria-label="Username" aria-describedby="basic-addon1" onChange={onChange} minLength={3} required />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Description</span>
            <textarea type="text" value={note.description} className="form-control" id="description" name="description" placeholder="add description" rows="3" onChange={onChange} minLength={5} required/>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Tag
            </span>
            <input type="text" value={note.tag} className="form-control" placeholder="add tag" id="tag" name="tag" aria-label="Username" aria-describedby="basic-addon1" onChange={onChange} onFocus={handleFocus} />
          </div>

          <div className="text-center">
            <button disabled={note.title.length===0 && note.description.length===0} type="reset" className="btn btn-outline-danger mx-2 my-2 btn-sm" onClick={handleReset}>
              Reset
            </button>
            <button  type="submit" className="btn btn-outline-success my-2 btn-sm" >
              Add
            </button>
          </div>
        </form>
      </div>
      <hr className="hr hr-blurry" />
    </div>
  );
};

export default AddNote;

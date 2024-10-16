import React,{useContext} from 'react'
import noteContext from '../Context/notes/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { note } = props;
    const {deleteNote} = context;

    return (
        <div className="col-md-3"> 
            <div className="card my-3"> 
                <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description} </p> 
                <div className="d-flex justify-content-end">
                <i className="fa-regular fa-pen-to-square mx-2 "></i>
                <i className="fa-regular fa-trash-can mx-2" onClick={()=>deleteNote(note._id)}></i>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitem

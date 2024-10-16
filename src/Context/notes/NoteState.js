import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const host="http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwNzgwZjkxNTBkODgwZjZkOWNlMGY3In0sImlhdCI6MTcyOTA1MzcyM30.WyWrEG-ufYPM4m5NuDupUrRPJudjG8neY51xR8_HhvU"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }
    // Add note
    const addNote = async(title, description, tag) =>{
      // api call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwNzgwZjkxNTBkODgwZjZkOWNlMGY3In0sImlhdCI6MTcyOTA1MzcyM30.WyWrEG-ufYPM4m5NuDupUrRPJudjG8neY51xR8_HhvU"
        },
        body: JSON.stringify({title,description,tag})
      });
      const json= response.json();
      console.log("Adding a new note")
      const note= {
        "_id": "67078143150d880f6d9ce0fd",
        "user": "670780f9150d880f6d9ce0f7",
        "title": title,
        "description":description,
        "tag": tag,
        "date": "2024-10-10T07:24:51.212Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }
    
    // Edit  note
    const editNote = async(id,title, description, tag) =>{
      // api call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwM2I2ZmYzYzA3YjdjZWM3M2E4OWY0In0sImlhdCI6MTcyODMwMTM2OX0.SFatnGpQ6RMnkUloBc4yof9SF88nXoLmMncsKh9YN3s"
        },
        body: JSON.stringify({title,description,tag})
      });
      const json= response.json();

      // logic for edit note
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id === id){
          element.title=title;
          element.description=description;
          element.tag=tag;
        }
      }
    }
    
    // Delete note
    const deleteNote = (id) =>{
      console.log("deleting "+id);
      const newNotes= notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);
    }
    
    return (
        <NoteContext.Provider value={{notes,addNote,editNote,deleteNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
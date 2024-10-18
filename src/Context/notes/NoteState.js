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
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwNzgwZjkxNTBkODgwZjZkOWNlMGY3In0sImlhdCI6MTcyOTA1MzcyM30.WyWrEG-ufYPM4m5NuDupUrRPJudjG8neY51xR8_HhvU"
        },
        body: JSON.stringify({title,description,tag})
      });
      const json= response.json();

      let newNotes = JSON.parse(JSON.stringify(notes))
      // logic for edit in client
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id === id){
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
          break;
        }
      }
      setNotes(newNotes);
    }
    
    // Delete note
    const deleteNote = async(id) =>{
      // API call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwNzgwZjkxNTBkODgwZjZkOWNlMGY3In0sImlhdCI6MTcyOTA1MzcyM30.WyWrEG-ufYPM4m5NuDupUrRPJudjG8neY51xR8_HhvU"
        }
      });
      const json = response.json();
      console.log(json)
      
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
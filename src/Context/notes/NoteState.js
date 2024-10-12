import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "6707812c150d880f6d9ce0fb",
          "user": "670780f9150d880f6d9ce0f7",
          "title": "my title 3",
          "description": "my description 3",
          "tag": "ytb",
          "date": "2024-10-10T07:24:28.444Z",
          "__v": 0
        },
        {
          "_id": "67078143150d880f6d9ce0fd",
          "user": "670780f9150d880f6d9ce0f7",
          "title": "my title ",
          "description": "my description",
          "tag": "ytb",
          "date": "2024-10-10T07:24:51.212Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
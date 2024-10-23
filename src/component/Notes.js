import React from "react";
import AddNote from "./addNote";
import UpdateNote from "./updateNote";

const Notes = (props) => {

  return (
    <>
      <AddNote showAlert={props.showAlert}/>
      <UpdateNote showAlert={props.showAlert}/>
    </>
  );
};

export default Notes;

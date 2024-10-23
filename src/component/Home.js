import React from "react";
import Notes from "./Notes";

const Home = (props) => {
  return (
    <div style={{"backgroundColor": "#f7f7f7"}}>
      <Notes showAlert={props.showAlert}/>
    </div>
  );
};

export default Home;

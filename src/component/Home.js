import React from "react";
import Notes from "./Notes";

const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h1>Add notes</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Add Title
            </label>
            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Add Description
            </label>
            <input type="name" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary my-2">
            Submit
          </button>
        </form>
      </div>

      <Notes />
    </div>
  );
};

export default Home;

import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
  let navigate  = useNavigate()

  const handleSubmit = async (e) =>{
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/");
            props.showAlert("LoggedIn successfully","success");

        }
        else{
            props.showAlert("Invalid credentials","danger");
        }
  }

  const onChange= (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div style={{"backgroundColor": "#f7f7f7"}}>
      <h1 className="text-center">LogIn</h1>
        <div className="d-flex justify-content-center my-2">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name="password" required/>
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </div>
      </form>
        </div>
    </div>
  );
};

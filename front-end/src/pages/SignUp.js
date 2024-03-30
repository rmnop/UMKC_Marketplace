import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import './SignUp.css'
export default class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: ""
    }
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(e) {
  e.preventDefault();
  const { fname, lname, email, password } = this.state;
  console.log(fname, lname, email, password);
  
  // Serialize the form data
  const formData = JSON.stringify({ fname, lname, email, password });

  fetch("http://localhost:3000/signup", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      fname,
      lname,
      email,
      password,
    })
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data, "userRegister");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

render(){
  return(
    <>
    <Navbar />
<div className='formWrapper'>
<div className='title'>New Here? Sign Up is Easy.</div>
<form className='formMods' onSubmit={this.handleSubmit}>
<div className="mb-3">
        <label className="form-label">First Name</label>
        <input type="text" className="form-control" onChange={(e) => this.setState({fname: e.target.value})} />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input type="text" className="form-control" onChange={(e) => this.setState({lname: e.target.value})} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" onChange={(e) => this.setState({email: e.target.value})} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" onChange={(e) => this.setState({password: e.target.value})} />
      </div>
      <div className='formRedirect'><a href="/login">Already signed up? Click here to login.</a></div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
</div>
   
    </>
  )
}
}



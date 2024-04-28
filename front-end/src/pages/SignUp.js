import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import './SignUp.css'
export default class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      fname: "",
      email: "",
      password: ""
    }
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(e) {
  e.preventDefault();
  const { fname, email, password } = this.state;
  console.log(fname, email, password);
  
  // Serialize the form data
  const formData = JSON.stringify({ fname, email, password });

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
      email,
      password,
    })
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data, "userRegister");
    if(data.status === "ok") {
      alert("Registration Successful");
    } else {
      alert("Something went wrong");
    }
  });
}

render(){
  return(
    <>
    <div className='App'>
    <Navbar />
<div className='wrapper'>
<div className='form-box register'>
      <form action='' onSubmit={this.handleSubmit}>
        <h1>Registration</h1>
        <div className='input-box'>
          <input type='text' placeholder='First name' onChange={(e) => this.setState({fname: e.target.value})} required />
          {/*<FaUser className='icon' />*/}
          </div>
          <div className='input-box'>
          <input type='email' placeholder='Email' onChange={(e) => this.setState({email: e.target.value})} required />
          {/*<FaUser className='icon' />*/}
          </div>
          <div className='input-box'>
          <input type='password' placeholder='Password' onChange={(e) => this.setState({password: e.target.value})} required />
          {/*<FaUser className='icon' />*/}          
          </div>
          <button type='submit'>Register</button>

          <div className='register-link'>
            <p>Already have an account? <a href='/login'>Login</a></p>
          </div>
      </form>
    </div>
    </div>
    </div>
    </>
  )
}
}

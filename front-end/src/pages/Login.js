import React, {Component} from 'react'
import Navbar from '../components/Navbar'
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);

    fetch("http://localhost:3000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister");
      if(data.status=="OK"){
        alert("login successful");
        window.localStorage.setItem("token", data.data);
        window.location.href="/profile";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  }
  render(){
  return (
    <>
    <Navbar />
<div className='formWrapper'>
<div className='title'>Welcome Back! Let's Get You Signed In.</div>
<form className='formMods' onSubmit={this.handleSubmit}>
<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" onChange={(e) => this.setState({ email: e.target.value })} />
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
  <input type="password" className="form-control" onChange={(e) => this.setState({ password: e.target.value })} />
</div>
<div className='formRedirect'><a href="/signup">Don't have an account? Click here to sign up.</a></div>
      <button type="submit" className="btn btn-primary">Login</button>
      
    </form>
</div>
   
    </>
  )
}
}
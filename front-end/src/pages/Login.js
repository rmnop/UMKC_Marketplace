import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import '../pages/login.css'
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
      if(data.status==="OK"){
        alert("login successful");
        window.localStorage.setItem("token", data.data);
        window.localStorage.setItem("loggedIn", true);
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
  <div className='wrapper'>
    <div className='form-box login'>
      <form action='' onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='email' placeholder='Email' onChange={(e) => this.setState({email: e.target.value})} required />
          {/*<FaUser className='icon' />*/}
          </div>
          <div className='input-box'>
          <input type='password' placeholder='Password' onChange={(e) => this.setState({ password: e.target.value })} required />
          {/*<FaUser className='icon' />*/}          
          </div>
          <div className='remember-forgot'>
          <label><input type='checkbox'  />Remember me</label>
          <a href='/reset'>Forgot Password?</a>
          </div>
          <button type='submit'>Login</button>

          <div className='register-link'>
            <p>Don't have an account? <a href='/signup'>Register</a></p>
          </div>
      </form>
    </div>
  </div>
    </>
  )
}

}
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './reset.css'; 

export default class reset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {email} = this.state;
        console.log(email);
        fetch("/forgot-password", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                'User-agent': 'learning app',
            },
            body: JSON.stringify({
                email,
            }),
        })
            .then((res) => res.json()) 
            .then((data) => {
                console.log(data, "userRegister");
                alert(data.status);
            });
    }

render() {
    return (
        <form className='form-wrapper' onSubmit={this.handleSubmit}>
            <h3>Forgot Password</h3>

            <div className='mb-3'>
                <label>Email Address</label>
                <input type='email' className='form-control' placeholder='Enter Email' onChange={(e) => this.setState({email: e.target.value})}
                />
            </div>

            <div className='d-grid'>
                <button type='submit'>Submit</button>
            </div>
            <p className='forgot-password text-right'>
                <a href='/signup'>Sign Up</a>    
            </p>     
        </form>
    );
    }
}
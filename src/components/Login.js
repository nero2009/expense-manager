import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {startLogin, startLoginWithGoogle} from '../actions/auth'

export function Input(props){
    return(
        <div className="Input">
				<input name={props.name} id={props.name} placeholder={props.placeholder} />	
				<label htmlFor={props.name}></label>
			</div>
    )
}


export class Modal extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            username:'',
            password:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state)
    }

    loginWithGoogle=(e)=>{
        console.log('clicked')
        e.preventDefault()
        this.props.googleLogin();
    }

    login=(e)=>{
        e.preventDefault()
        const {email, password} = this.state;
        this.props.login(email,password)

    }

    render () {
        
        return (
            <div className="move-right">
            <div className="Modal ">
                <form  className="ModalForm">
                <div className="Input">
                    <input name="email" type="email" className="email" id="email" placeholder="nero@expense.com" value={this.state.email} onChange={this.handleChange} />
                    <label htmlFor="email"></label>
                </div>
                <div className="Input">
                    <input name="password" className="password" type="password" id="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                    <label htmlFor="password"></label>
                </div>
                    <div className="button-container">
                        <button className="login" onClick={this.login}>Log in<i className="fa fa-fw fa-chevron-right"></i></button>
                    </div>
                    <span className="login-option-label" >or connect with</span>
                    <button className="loginBtn loginBtn--google" onClick={this.loginWithGoogle}>
                        Login with Google
                    </button>
                    <p className="register-text">Not registered, <Link className="hyperlink" to="/register">Register now</Link></p>
                    <p className="login-text">By signing up, you agree to the <a className="hyperlink" href="#">Terms of Use</a> and <a className="hyperlink" href="#">Privacy Policy</a></p>
				</form>
               
                </div>
            </div>
        )
    }
}


export default Modal


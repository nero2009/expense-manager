import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {startLogin, startLoginWithGoogle} from '../actions/auth'

export function Input(props){
    return(
        <div className="Input">
				<input id={props.name} placeholder={props.placeholder} />	
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
        this.setState(()=>{
            return{
                [e.target.name]:e.target.value
            }
        })
    }

    submit=(e)=>{
        console.log('clicked')
        e.preventDefault()
        this.props.login();
    }

    render () {
        console.log(this.props)
        return (
            <div className="move-right">
            <div className="Modal ">
                <form  className="ModalForm">
					<Input name="email" type="email" placeholder="nero@expense.com" value={this.state.email} onChange={this.handleChange} />
					<Input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                    <div className="button-container">
                        <button className="login">Log in<i className="fa fa-fw fa-chevron-right"></i></button>
                    </div>
                    <span className="login-option-label">or connect with</span>
                    <button className="loginBtn loginBtn--google" onClick={this.submit}>
                        Login with Google
                    </button>
                    <p className="register-text">Not registered, <Link to="/register">Register now</Link></p>
                    <p className="login-text">By signing up, you agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
				</form>
               
                </div>
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch)=>({
    startLogin:()=> dispatch(startLoginWithGoogle())
})

export default connect(undefined,mapDispatchToProps)(Modal)


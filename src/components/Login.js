import React, { Component } from 'react'



export function Input(props){
    return(
        <div className="Input">
				<input id={props.name}  required type={props.type} placeholder={props.placeholder} />	
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

    submit=()=>{
        e.preventDefault()
    }
    render () {
        return (
            <div className="move-right">
            <div className="Modal ">
                <form onSubmit={this.props.onSubmit} className="ModalForm">
					<Input name="email" type="email" placeholder="mrjackolai@gmail.com" value={this.state.email} onChange={this.handleChange} />
					<Input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                    <div className="button-container">
                        <button>Log in<i className="fa fa-fw fa-chevron-right"></i></button>
                        <button>Register<i className="fa fa-fw fa-chevron-right"></i></button>
                    </div>
                    <button class="loginBtn loginBtn--google">
                        Login with Google
                    </button>
                    <p>By signing up, you agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
				</form>
                </div>
            </div>
        )
    }
}




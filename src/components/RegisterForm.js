import React, { Component } from 'react'
import { Link} from 'react-router-dom'

class RegisterForm extends Component {
    constructor (props) {
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submit =(e)=>{
        e.preventDefault()
        const {email, password} = this.state
        this.props.createUser(email,password)

    }
    
    render () {
        
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}

                    <div className="form-group-register ">
                        <label className="register-label">First Name</label>
                        <input className=" register-form" type="text" name="firstName" placeholder="FirstName" value={this.state.firstName} onChange={this.handleChange} />
                        
                       
                    </div>
                    <br/>
                    <div className="form-group-register ">
                        <label>Last Name</label>
                        <input className=" register-form" type="text" name="lastName" placeholder="LastName" value={this.state.lastName} onChange={this.handleChange} />
                        
                        
                    </div>
                    <br/>
                    <div className="form-group-register ">
                        <label>Email</label>
                        <input className=" register-form" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                        
                        
                    </div>
                    <br/>
                    <div className="form-group-register ">
                        <label>Password</label>
                        <input className=" register-form" type="password" name="password" placeholder="Password" type="password" value={this.state.password} onChange={this.handleChange} />
                        
                    </div>
                    <br/>
                    <div >
                        <button className="register" onClick={this.submit}>Sign up<i className="fa fa-fw fa-chevron-right"></i></button>
                    </div>
                        <p style={{textAlign:"center", color:"grey"}}>Already a member? <Link to="/" style={{ color:"grey"}}>Login</Link></p>
                    </form> 
            </div>
        )
    }
}

export default RegisterForm
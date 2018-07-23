import React, { Component } from 'react'

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
    
    render () {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}

                    <div className="form-group input-effect">
                        <input className="effect-21" type="text" placeholder="FirstName" value={this.state.firstName} onChange={this.onDescriptionChange} />
                        <label>First Name</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <br/>
                    <div className="form-group input-effect">
                        <input className="effect-21" type="text" placeholder="LastName" value={this.state.lastName} onChange={this.onDescriptionChange} />
                        <label>Last Name</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <br/>
                    <div className="form-group input-effect">
                        <input className="effect-21" type="text" placeholder="Email" value={this.state.email} onChange={this.onDescriptionChange} />
                        <label>Email</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <br/>
                    <div className="form-group input-effect">
                        <input className="effect-21" type="text" placeholder="Password" value={this.state.password} onChange={this.onDescriptionChange} />
                        <label>Password</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <br/>
                    <div>
                        <button className="button-register"></button>
                    </div>
                    
                    </form> 
            </div>
        )
    }
}

export default RegisterForm
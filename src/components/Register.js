import React from 'react'
import RegisterForm from './RegisterForm'

const Register = (props) => {
    return (
       <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Register</h1>
            </div>
        </div>
            <div className="content-container">
            <RegisterForm></RegisterForm>
        </div>
       </div>
    )
}

export default Register
import React from 'react'
import RegisterForm from './RegisterForm'

const Register = (props) => {
    return (
        <div className="register-container">
            <div style={{margin:"0 auto", width:"400px"}}>
                <div style={{textAlign:"center"}}>
                        <h1 >Expense Manager</h1>
                        <h3>Sign Up</h3>
                    </div>
                    <div >
                    `   <RegisterForm></RegisterForm>
                    </div>
            </div>
        </div>
    )
}

export default Register


import React from 'react'
import RegisterForm from './RegisterForm'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createUser} from '../actions/auth'

const Register = (props) => {
    return (
        <div className="register-container">
            <div style={{margin:"0 auto", width:"400px", paddingTop:"75px"}}>
                <div style={{textAlign:"center"}}>
                <Link to="/" className="Sign-up-header"><h1>Expense Manager</h1></Link>
                        <h3 style={{color:"grey"}}>Sign Up</h3>
                    </div>
                    <div >
                      <RegisterForm createUser={props.createUser}/>
                    </div>
            </div>
        </div>
    )
}

const mapDispatchToProps =(dispatch)=>({
    createUser:(email,pass)=> dispatch(createUser(email,pass))
})

export default connect(undefined, mapDispatchToProps)(Register)


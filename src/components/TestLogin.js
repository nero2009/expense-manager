import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import {connect} from 'react-redux'
import {startLogin,startLoginWithGoogle,createUser} from '../actions/auth'

class TestLogin extends Component {
    constructor (props) {
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    handleChange = event =>{
        this.setState({[event.target.name]:event.target.value})
    }

    login = ()=>{
        const {email,password}= this.state
        this.props.startLogin(email,password)
    }

    create = ()=>{
        const {email,password}= this.state
        this.props.createUser(email,password)
    }
    
    render () {
        const {email,password}= this.state
        const {startLogin, startLoginWithGoogle}= this.props
        return (
            <div>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                </FormControl>
                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </FormControl>
                <span>
                    <Button variant="contained" onClick={this.login}>Log In</Button>
                    <Button variant="contained" onClick={this.create}>Register</Button>
                    <Button variant="contained" color="primary" onClick={startLoginWithGoogle}>Log In with Google</Button>
                </span>
                
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch)=>({
    startLogin:(email,pass)=> dispatch(startLogin(email,pass)),
    startLoginWithGoogle:()=> dispatch(startLoginWithGoogle()),
    createUser:(email,pass)=> dispatch(createUser(email,pass))
    
})

export default connect(undefined,mapDispatchToProps)(TestLogin)
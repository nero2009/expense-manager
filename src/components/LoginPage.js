import React from 'react';
import {connect} from 'react-redux'
import {startLogin, startLoginWithGoogle} from '../actions/auth'
import {Modal} from './Login'
import Typist from '../components/Typist/Typist'

export const LoginPage = ({startLogin,startLoginWithGoogle}) => {
    return (
        <div className="container-fluid">
            <div className="box-layout row">
                <div className="box-layout-title ">
                    <Typist ></Typist>
                </div>
                <div className="box-layout-mobile_title">
                    <h1 className="mobile-text" >Expense Manager</h1>
                </div>
                <div className="box-layout-login ">
                    <Modal googleLogin={startLoginWithGoogle} login={startLogin}/>
                </div>
                
            </div>
           
        </div>
            
        
    );
};

const mapDispatchToProps =(dispatch)=>({
    startLoginWithGoogle:()=> dispatch(startLoginWithGoogle()),
    startLogin:(email,pass)=> dispatch(startLogin(email,pass)),
})

export default connect(undefined,mapDispatchToProps)(LoginPage)
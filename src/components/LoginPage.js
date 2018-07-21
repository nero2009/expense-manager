import React from 'react';
import {connect} from 'react-redux'
import {startLogin, startLoginWithGoogle} from '../actions/auth'
import {Modal} from './Login'
import Typist from '../components/Typist/Typist'

export const LoginPage = ({startLogin}) => {
    return (
        <div className="box-layout-main">
            <div className="box-layout">
                <div className="box-layout-title">
                    <Typist ></Typist>
                </div>
                <div className="box-layout-login">
                    <Modal login={startLogin}/>
                </div>
                
            </div>
           
        </div>
    );
};

const mapDispatchToProps =(dispatch)=>({
    startLogin:()=> dispatch(startLoginWithGoogle())
})

export default connect(undefined,mapDispatchToProps)(LoginPage)
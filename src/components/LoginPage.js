import React from 'react';
import {connect} from 'react-redux'
import {startLogin, startLoginWithGoogle} from '../actions/auth'

export const LoginPage = ({startLogin}) => {
    return (
        <div className="box-layout-main">
            <div className="box-layout">
                
            </div>
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expense Manager</h1>
                <p>It's time to get your expenses under control</p>
                <button className="button" onClick={startLogin}>Login with Google</button>
            </div>
        </div>
    );
};

const mapDispatchToProps =(dispatch)=>({
    startLogin:()=> dispatch(startLoginWithGoogle())
})

export default connect(undefined,mapDispatchToProps)(LoginPage)
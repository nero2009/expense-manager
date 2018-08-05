import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
 

export const DashboardRouter = ({
    isAuthenticated, 
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest} component={(props)=>(
            isAuthenticated ? (
                <div>
                    
                    <Component {...props}/>
                </div>
                
            ) : (
                <Redirect to="/" />
            )
        )}/>
    )
}

const mapStateToProps =(state)=>({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(DashboardRouter)
import React from 'react'
import {Route,Redirect} from 'react-router'
import auth from '../Auth'
export default function ProtectedHomeRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} render={
            (props)=>{
                if(auth.isAuthenticated()){
                    return <Component {...props}/>
                }
                return <Redirect to="/"/>
            }
        }/>
    )
}

import React from 'react'
import {Route,Redirect} from 'react-router'
export default function ProtectedHomeRoute({component: Component, ...rest}) {
    return (
        <Route {...rest} render={
            (props)=>{
                 localStorage.getItem("isAuth")
                if("true" ===localStorage.getItem("isAuth")){
                    return <Component {...props}/>
                }
                return <Redirect to="/"/>
            }
        }/>
    )
}

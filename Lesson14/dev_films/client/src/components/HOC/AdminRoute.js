import React from 'react'
import { Route, Redirect } from 'react-router-dom'

  const AdminRoute = ({user, render, ...all}) =>{
    return(
           <Route 
           {...all}
           render={props=> 
          user.token && user.role == 'admin' ? (
            render(props)
          ):  <Redirect to='/films' />  
        }
           />
    )
  }
  export default AdminRoute


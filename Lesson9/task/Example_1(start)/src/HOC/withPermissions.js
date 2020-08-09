import React from 'react'

export default function withPermissions(Component, status) {
    return function WrappedWithPermissions(props) {
        const user = JSON.parse(localStorage.getItem('user'))
        return user && user.status !== 'user' && status === 'admin' ? null: <Component />  
        // return user && user.status !== 'admin' && status === 'admin' ? null: <Component />  
    }
}
// Component
import React from 'react'
import data from '../data'

function withToggle(Component) {
    // const data = data.map(data => )
    return class extends React.Component {
        // componentWillReceiveProps()
        
        render() {
            return(
                <Component {...this.props}/>
            )
        }
    }
}
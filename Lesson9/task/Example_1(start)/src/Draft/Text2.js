import React from 'react'
// import ComponentProps from './hoc'


class Text2 extends React.Component {
    render() {
        const {state} = this.props
        return(
            <>
            Test 2 
            {state.age}
            </>
        )
    }
}
export default Text2
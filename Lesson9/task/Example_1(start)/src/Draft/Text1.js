import React from 'react'
import ComponentProps from './hoc'
import Text2 from './Text2'

class Text1 extends React.Component {
    render() {
        const {state} = this.props
        return(
            <>
            Test 1 {state.name}
            {state.age}
            </>
        )
    }
}
export default ComponentProps(Text1, Text2)
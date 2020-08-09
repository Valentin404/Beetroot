import React from 'react'

export default function ComponentProps(Component, OthreComponent) {
    return function ComponentPropsOtherComponent(props){
        // constructor(props) {
        //     super(props)
             
        // }
       const state ={
            name: 'Bill',
            age: ' 18'
        }
        
        return(
            <>
            <Component 
            state={state}
            // {props.state}
            {...props}
            />
            <br />
            <OthreComponent  
            // {state}
            state={state}
            {...props} />
            </>
        )
    }
}

// export default function ComponentProps(Component, OthreComponent){
//     class ComponentPropsOtherComponent extends React.Component {
//         constructor(props) {
//             super(props)
//             this.state = {
//                 data: {
//                     name: 'Fort'
//                 }
//             }
//         }
//         componentWillMount() {
//             this.setState({ data: this.props.newComponentData });
//         }
//         // handleSubmit = e => {
//         //     e.preventDefault();
//         //     // console.log(this.state);
//         //     this.setState({ data: this.props.newComponentData });
//         //   };
//         render() {
//             return(
//                 <>
//                 <Component 
//                 {...this.state}
//                 // {props.state}
//                 {...this.props}
//                 />
//                 <br />
//                 <OthreComponent  
//                 // {state}
//                 {...this.state}
//                 {...this.props} />
//                 </>
//             )
//         }
        
//     }
//     return ComponentPropsOtherComponent
// }
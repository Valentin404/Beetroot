import React, {Component} from 'react'
import { render } from 'react-dom'

// const Course = ({}) => {
//     // state = {
//     //     isOpen: false
//     // }
//     // toggleOpen = () => {this.setState}
//     toggleOpen = () => {}
//     render() {
//     return(
//       <>
//       <h3></h3>
//       </>
//     )
//    }
// }

class Course extends React.Component {
//     constructor(props){
//         super(props)
//     }
//         // state = {
//     //     isOpen: false
//     // }
//     // toggleOpen = () => {this.setState}
//     toggleOpen = () => {}
//     render() {
//         const { isOpen } = this.state
//         const { course } = this.props
//     return(
//       <>
//       <h3>{course.title}</h3>
//       </>
//     )
//    }
constructor(props) {
    super(props)
    this.state = {
        isOpen: false
    }
}
toggleOpen = () => this.setState(({isOpen}) => ({isOpen: !isOpen}))
 render() {
     const {isOpen} = this.state;
//    
//         <div>const newData = data.map(data=>(
//             <h3>{data.title}</h3>
//            <button onClick={this.toggleOpen} >
//                {isOpen ? 'Closed' : 'Open'}
//            </button>
//            {isOpen ? <p>{data.description}</p>: null}
//         </div>
//     ))
     return(
         <>
         <div>
            <h3>{this.props.title}</h3>
           <button onClick={this.toggleOpen} >
               {isOpen ? 'Closed' : 'Open'}
           </button>
           {isOpen ? <p>{this.props.description}</p>: null}
        </div>
         </>
     )
 }   
}
export default Course
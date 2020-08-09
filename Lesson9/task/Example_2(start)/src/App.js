import React from 'react'
import data from './data'
import CoursesList from './components/courses/CoursesList'
class App extends React.Component{
constructor(props) {
    super(props)
    this.state = {
        isOpen: false
    }
}
toggleOpen = () => this.setState(({isOpen}) => ({isOpen: !isOpen}))
 render() {
     const {isOpen} = this.state;
   const newData = data.map(data=>(
        <div>
            <h3>{data.title}</h3>
           <button onClick={this.toggleOpen} >
               {isOpen ? 'Closed' : 'Open'}
           </button>
           {isOpen ? <p>{data.description}</p>: null}
        </div>
    ))
     return(
         <>
         {/* {newData} */}
         <CoursesList />
      
         </>
     )
 }   
}

export default App
import React from 'react'
import data from '../../data'
import Course from './Course'
class CoursesList extends React.Component {
    render() {
        // const newData = 
    
        return(
            data.map(data=>(
                <Course title={data.title} description={data.description}/> ))
        //     <div>
        //     <h3>{data.title}</h3>
        //    <button onClick={this.toggleOpen}>
        //        {isOpen ? 'Closed' : 'Open'}
        //    </button>
        //    {isOpen ? <p>{data.description}</p>: null}
        // </div>
        )
    }
}

// const CoursesList = () => {

// }
export default CoursesList
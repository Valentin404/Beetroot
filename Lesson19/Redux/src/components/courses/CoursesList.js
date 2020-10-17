import React, {memo} from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

const CoursesList = ({courses}) => {
    if (!courses.length) {
        return null;
    }
    console.log("render")
    return (
        <table className="table">
            <thead>
            <tr>
                <th />
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
            </tr>
            </thead>
            <tbody>
            {courses.map((course, index) => (
                <tr key={course.id}>
                    <td>{index + 1}</td>
                    <td><Link to={`/course/${course.slug}`}>{course.title}</Link></td>
                    <td>{course.authorName}</td>
                    <td>{course.category}</td>
                    <button onClick={()=>{
                    //    courses.filter(c => c.id !== id )
                    // delete courses[index]
                    courses.splice(index, 1) 
                    console.log(course.title)
                    }}>delete</button>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

CoursesList.propTypes = {
    courses: PropTypes.array.isRequired,
}

CoursesList.defaultProps = {
    courses: [],
}

export default memo(CoursesList)
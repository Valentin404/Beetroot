import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {loadCoursesAction, saveCourseAction} from "../../ac/coursesActions"
import {loadAuthorsAction} from "../../ac/authorActions"
import CourseForm from '../common/CourseForm'
import {newCourse} from '../../tools/mockData'
import {toast} from 'react-toastify'
import Spinner from '../common/Spinner'

const ManageCoursesPage = ({courses, authors, loadCoursesAction, loadAuthorsAction, saveCourseAction, history, ...props}) => {
    const [course, setCourse] = useState({...props.course})
    const [errors, setErrors] = useState({})
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        if (courses.length === 0) {
            loadCoursesAction().catch(err => console.log("Error ", err.message));
        }
    }, [courses.length, loadCoursesAction]);

    useEffect(() => {
        if (authors.length === 0) {
            loadAuthorsAction().catch(err => console.log("Error ", err.message));
        }
    }, [authors.length, loadAuthorsAction]);

    const handleSubmit = e => {
        e.preventDefault()

        if(!isFormValid()) return;

        setSaving(true)
        saveCourseAction(course)
            .then(() => {
                toast.success('Course saved')
                history.push("/courses")
            })
            .catch(err => {
                setSaving(false)
                setErrors({onSave: err.message})
            })
    }

    const handleChange = e => {//debugger
        const {name, value} = e.target
        setCourse(prev => ({
            ...prev,
            [name]: name === "authorId" ? parseInt(value) : value,
        }))
        setErrors(prev => ({ ...prev, [name]: "" }));
    }

    function isFormValid() {
        const {title, authorId, category} = course
        const errors = {}
        if(!title) errors.title = 'This field cannot be blank'
        if(!authorId) errors.authorId = 'This field cannot be blank'
        if(!category) errors.category = 'This field cannot be blank'

        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {authors.length === 0 || courses.length === 0 ? (
                    <Spinner />
                ) : <CourseForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    course={course}
                    authors={authors}
                    errors={errors}
                    saving={saving}
                />
                }
            </div>
        </div>
    )
}

ManageCoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
}

ManageCoursesPage.defaultProps = {
    courses: [],
}

function mapStateToProps({ courses, authors }, ownProps) {
    const slug = ownProps.match.params.slug

    return {
        courses: authors.length === 0 ? [] : courses,
        authors,
        course: slug && courses.length ? courses.find(c => c.slug === slug) : newCourse
    }
}

export default connect(mapStateToProps, {
        loadCoursesAction,
        loadAuthorsAction,
        saveCourseAction,
    },
)(ManageCoursesPage)

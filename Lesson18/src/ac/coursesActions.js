import C from '../constans'
import * as courseApi from '../api/courseApi'

export function loadCoursesAction() {
    return function(dispatch) {
        return courseApi.getCourses().then(courses => {
            dispatch({
                type: C.LOAD_COURSES_SUCCESS,
                payload: courses,
            })
        })
            // .catch(error => throw error)
    }
}

export const createCourseAction = course => ({
    type: C.CREATE + C.COURSE,
    payload: course,
})

import {combineReducers} from "redux";
import courses from './coursesReducer'
import authors from './authorsReducer'
import counter from './counterReducer'
import coursesEdit from './CoursReduserEdit'

const rootReducer = combineReducers({
    courses,
    authors,
    counter,
    coursesEdit
})

export default rootReducer

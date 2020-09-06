import C from '../constans'

const initState = [];

export default function (state = initState, action) {
    const {type, payload} = action

    switch(type) {
        case C.CREATE + C.COURSE: return [...state, payload]
        case C.LOAD_COURSES_SUCCESS: return payload

        default: return state
    }
}

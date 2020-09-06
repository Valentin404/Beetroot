import C from '../constans'

export default function(state= [], action) {
    const {type, payload} = action

    switch (type) {
        case C.LOAD_AUTHOR_SUCCESS: return payload

        default: return state
    }
}

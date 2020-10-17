import C from '../constans'

const initState = [];

export default function (state = initState, action) {
    const {type, payload} = action

    switch(type) {
        // case C.EDIT + C.COURSE: return state.map(item=> item.id==payload.id?payload:item)
        case C.EDIT + C.COURSE: return [...state, payload]

        default: return state
    }
}

import C from "../constants"
import * as authorApi from "../api/authorApi"
import {apiCallError, beginApiCall} from './apiStatusActions';

export function loadAuthorsAction() {
    return function(dispatch) {
        dispatch(beginApiCall())

        return authorApi
            .getAuthors()
            .then(authors => {
                dispatch({
                    type: C.LOAD_AUTHOR_SUCCESS,
                    payload: authors,
                })
            })
            .catch(err => {
            dispatch(apiCallError(err))
            throw err;
        })
    }
}

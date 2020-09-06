import {createStore, applyMiddleware, compose} from "redux";
import reducer from '../reducers'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import generateId from '../middlewares/generateId'

const logger = createLogger({collapsed: true})

const middlewares = [thunk, generateId, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function (initialState) {
    return createStore(
        reducer,
        composeEnhancers(applyMiddleware(...middlewares))
    )
}

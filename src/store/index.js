import { createStore, combineReducers, applyMiddleware } from 'redux'
import { names, greeting} from "./reducers"

const initialState = {
    names: [],
    greeting: 'Hello',
}

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (appState = initialState) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({names, greeting}),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            appState
    )

export default storeFactory
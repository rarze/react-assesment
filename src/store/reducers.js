import Constants from '../constants'

export const names = (state = [], action) => {
    switch (action.type) {
        case Constants.UPDATE_NAMES:
            return action.names
        default:
            return state
    }
}

export const greeting = (state = '', action) => {
    switch (action.type) {
        case Constants.UPDATE_GREETING:
            return action.greeting
        default:
            return state
    }
}
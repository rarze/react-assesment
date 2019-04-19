import Constants from './constants'

export const addName = names => ({
    type: Constants.UPDATE_NAMES,
    names: names
})

export const updateGreeting = greeting => ({
    type: Constants.UPDATE_GREETING,
    greeting: greeting
})
import {greeting, names} from '../../../src/store/reducers'
import Constants from "../../../src/constants";

describe('greeting reducer', () => {
    it('should update the greeting from the state', () => {
        const state = {}
        const action = {
            type: Constants.UPDATE_GREETING,
            greeting: 'Hello'
        }
        expect(greeting(state, action)).toEqual(action.greeting)
    })
})
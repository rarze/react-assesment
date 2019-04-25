import Constants from '../../../src/constants'
import { names } from '../../../src/store/reducers'

describe('names reducer', () => {
    it('should update the names from the state', () => {
        const state = {}
        const action = {
            type: Constants.UPDATE_NAMES,
            names: ["Rodrigo", "Juan"]
        }
        expect(names(state, action)).toEqual(action.names)
    })
})
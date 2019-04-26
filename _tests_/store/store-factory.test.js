import storeFactory  from '../../src/store/index'
import Constants from '../../src/constants'

describe('create store with an initial state', () => {
    let store
    beforeAll(() => {
        store = storeFactory()
    })
    it('should not have any name', () => expect(store.getState().names.length).toBe(0))
    it('should have Hello as default greeting', () => expect(store.getState().greeting).toBe('Hello'))
})

import React from 'react'
import {addName} from "../actions";
import PropTypes from 'prop-types'

const Names = (props, {store}) => {

    const updateNames = (event) => {
        let newValues = event.target.value.split('\n')
            .filter(value => value !== '')
        if (!!newValues) {
            store.dispatch(addName(newValues))
        }
    }

    return (
        <textarea onChange={updateNames}></textarea>
    );

}

Names.contextTypes = {
    store: PropTypes.object
}

export default Names;
import React from 'react'
import PropTypes from 'prop-types'

const Names = ({names=[], onChange=f=>f}) =>
    <textarea onChange={event => onChange(event)} defaultValue={names.join("\n")}></textarea>

Names.propTypes = {
    names: PropTypes.array,
    onChange: PropTypes.func
}

export default Names;
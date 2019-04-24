import PropTypes from 'prop-types'
import React from 'react'
import Constants from '../constants'

const Language = ({ onLanguageChange = f => f }) => {
    const languageOptions = Constants.GREETINGS.map((greetingData) =>
        <option key={greetingData.language}>{greetingData.language}</option>
    );

    return (
        <div  className="Item-container">
            <select onChange={event => onLanguageChange(event)}>
                {languageOptions}
            </select>
        </div>
    );
}

Language.propTypes = {
    onLanguageChange: PropTypes.func,
}

export default Language;
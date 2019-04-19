import React from 'react'
import PropTypes from "prop-types";
import Constants from '../constants'
import { updateGreeting } from "../actions";

const Language = (props, {store}) => {

    const updateLanguage = (event) => {
        const newGreeting = Constants.GREETINGS[event.target.value]
        store.dispatch(updateGreeting(newGreeting))
    }

    const languageOptions = Object.keys(Constants.GREETINGS).map((language) =>
        <option key={language}>{language}</option>
    );

    return (
        <div  className="Item-container">
            <select onChange={updateLanguage}>
                {languageOptions}
            </select>
        </div>
    );
}

Language.contextTypes = {
    store: PropTypes.object
}

export default Language;
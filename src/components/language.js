import React from 'react'
import PropTypes from "prop-types";
import Constants from '../constants'
import { updateGreeting } from "../actions";

const Language = (props, {store}) => {

    const updateLanguage = (event) => {
        const newGreeting = Constants.GREETINGS.filter(greetingData => greetingData.language === event.target.value)[0].greeting;
        store.dispatch(updateGreeting(newGreeting))
    }

    const languageOptions = Constants.GREETINGS.map((greetingData) =>
        <option key={greetingData.language}>{greetingData.language}</option>
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
    store: PropTypes.object,
}

export default Language;
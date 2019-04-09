import React from 'react'

const Language = ({languages, languageChange}) => {
    const languageOptions = languages.map((language) =>
        <option key={language}>{language}</option>
    );
    return (
        <div  className="Item-container">
            <select onChange={languageChange}>
                {languageOptions}
            </select>
        </div>
    );
}

export default Language;
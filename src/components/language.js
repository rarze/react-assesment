import React from 'react'

class Language extends React.Component {
    constructor(props) {
        super(props)
        this.options = ['English', 'Spanish', 'Italian']
    }

    render() {
        const languages = this.options.map((language) =>
            <option key={language.toString()}>{language}</option>
        );
        return (
            <div  className="Item-container">
                <select onChange={this.updateGreeting}>
                    {languages}
                </select>
            </div>
        );
    }
}

export default Language;
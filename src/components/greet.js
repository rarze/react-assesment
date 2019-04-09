import React from 'react';
import '.././App.css';

class Greet extends React.Component {
    constructor(props) {
        super(props)
        this.greetingsByLang = {
            en: 'Hello',
            es: 'Hola',
            ita: 'Ciao'
        }
        this.state = {
            names: [],
            currentGreeting: this.greetingsByLang.en
        }
        this.addName = this.addName.bind(this)
        this.updateGreeting = this.updateGreeting.bind(this)
    }

    addName(event) {
        let newValues = event.target.value.split('\n')
        if (!!newValues) {
            this.setState({names: newValues.filter(value => value !== '')})
        }
    }

    updateGreeting(key) {
        this.setState({currentGreeting: this.greetingsByLang[key]})
    }

    render() {
        const listItems = this.state.names.map((name) =>
            <li key={name.toString()}>
                {this.state.currentGreeting}, {name}
            </li>
        );
        return (
            <div className="Item-container">
                <textarea onChange={this.addName}></textarea>
                <ul className="Greeting-list">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default Greet;
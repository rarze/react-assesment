import React from 'react';
import '.././App.css';
import PropTypes from "prop-types";

const Greet = (props, {store}) => {
    const {names, greeting} = store.getState()
    const listItems = names.map((name) =>
        <li key={name.toString()}>
            {greeting}, {name}
        </li>
    );
    return (
        <div className="Item-container">
            <ul className="Greeting-list">
                {listItems}
            </ul>
        </div>
    );
}

Greet.contextTypes = {
    store: PropTypes.object
}

export default Greet;
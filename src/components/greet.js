import React from 'react';
import PropTypes from "prop-types";
import '.././App.css';

const Greet = ({names=[], greeting=''}) => {
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

Greet.propTypes = {
    names: PropTypes.array,
    greeting: PropTypes.string
}

export default Greet;
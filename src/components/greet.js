import React from 'react';
import '.././App.css';

const Greet = ({greeting, names}) => {
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

export default Greet;
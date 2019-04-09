import React from 'react'

const Names = ({addName}) => {
    return (
        <textarea onChange={addName}></textarea>
    );
}

export default Names;
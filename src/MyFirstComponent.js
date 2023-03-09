import React from 'react';

function myFirstComponent(props) {
    return (
        <button>
            Was button clicked? {props.wasClicked}
        </button>
    )
}

export default myFirstComponent
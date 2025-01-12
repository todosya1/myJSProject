import React from 'react';

/**
 * A styled button component with an onClick handler.
 * 
 * @param {string} label - The button text.
 * @param {function} onAction - The function to call when the button is clicked.
 * @returns {ReactElement} A button React element.
 */
const ActionButton = ({ label, onAction }) => {
    return (
        <button onClick={onAction} style={{ margin: '10px', padding: '10px 20px' }}>
            {label}
        </button>
    );
};

export default ActionButton;

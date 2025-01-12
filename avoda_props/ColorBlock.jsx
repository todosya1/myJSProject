import React from 'react';

/**
 * A React component that renders a div with the given color.
 * @param {{color: string}} props - The properties for the component. The color
 * property is the color that the component should render as. If not provided, the
 * component will render with a gray color.
 * @returns {React.ReactElement} The rendered React component.
 */
const ColorBlock = ({ color = 'gray' }) => {
    const style = {
        width: '50px',
        height: '50px',
        backgroundColor: color,
        margin: '10px'
    };

    return <div style={style}></div>;
};

export default ColorBlock;

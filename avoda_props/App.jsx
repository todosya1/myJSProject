
/*
מגישים: 
יבגני נמצ'נקו 
שמיאקין לאוניד  
כיתה 48-5
*/

import React from 'react';
import ColorBlock from './components/ColorBlock';
import ActionButton from './components/ActionButton';
import ImageWithCaption from './components/ImageWithCaption';

/*
 * The main App component. 
 * The examples are:
 * 1. A flexbox with four ColorBlock components.
 * 2. A button with an ActionButton component.
 * 3. Two ImageWithCaption components.
 *    The first has a valid src and caption, and the second has no src, but a caption.
 */
const App = () => {


/*
 * Handles a button click event.
 * Alerts the user that the button was clicked.
 */
  const handleButtonClick = () => {
    alert('Button clicked!');
};
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>React Components Example</h1>

            {/* Targil 1 */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ColorBlock color="red" />
                <ColorBlock color="blue" />
                <ColorBlock color="purple" />
                <ColorBlock />
            </div>

             {/* Targil 2 */}
             <div>
             <ActionButton label="Click Me" onAction={handleButtonClick} />
            </div>

            {/* Targil 3 */}
            <div>
            <ImageWithCaption
                src="https://cdn.pixabay.com/photo/2020/11/22/11/53/sky-5766341_1280.jpg"
                caption="The Image taken from Pixabay"
            />
            <ImageWithCaption caption="No Image Provided" />
            </div>

        </div>
    );
};

export default App;

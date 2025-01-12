import React from 'react';

/**
 * A React component that displays an image with a caption. The image is
 * rendered with a maximum width of 150px and is centered horizontally. If
 * the src property is not a valid URL, the component will render a "Image
 * not available" message instead.
 * @param {{src: string, caption: string}} props - The properties for the
 * component. src is the URL of the image, and caption is an optional string
 * that will be displayed below the image.
 * @returns {React.ReactElement} The rendered React component.
 */
const ImageWithCaption = ({ src, caption }) => {


    /**
     * Checks if a given URL is valid. This will return true if the given string
     * can be parsed into a valid URL, and false otherwise.
     * @param {string} url - The URL to check
     * @returns {boolean} True if the URL is valid, false otherwise
     */
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    let content;
    
    if (isValidUrl(src)) {
        content = (
            <>
                <img
                    src={src}
                    alt={caption || "Image"}
                    style={{ maxWidth: '150px', display: 'block', margin: '0 auto' }}
                />
                {caption && <p>{caption}</p>}
            </>
        );
    } else {
        content = <p>Image not available</p>;
    }

    return <div style={{ textAlign: 'center', margin: '10px' }}>{content}</div>;
};

export default ImageWithCaption;

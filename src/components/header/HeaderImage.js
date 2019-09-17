import React from 'react';

function HeaderImage({src}) {
    return (
        <div>
            <img className = "App-header-image" src={src} alt=""/>
        </div>
    )
}

export default HeaderImage;
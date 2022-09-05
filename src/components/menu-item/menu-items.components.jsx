import React from "react";
import './menu-item.styles.scss';

// this is a functional component because, we are not managing state here
const MenuItem = ({title, imageUrl, size}) => ( // here we destructured title off of props
    <div className={`${size} menu-item`}>
        <div 
        className="background-image"
         style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">LIMITED VERSION</span>
                </div>
            </div>
)

export default MenuItem;
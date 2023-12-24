import React from 'react'
import './hover.css'

const Ipad = ({iPadState}) => {
    return (
        <div className="hoverEffects" onMouseLeave={iPadState}>
        <div className="iphoneHover" >
            <h3>Explore iPad</h3>
            <ul>
                <li><a href=""> Explore All iPads</a></li>
                <li><a href=""> iPad Pro</a></li>
                <li><a href=""> iPad Air</a></li>
                <li><a href=""> iPad</a></li>
                <li><a href=""> iPad Mini</a></li>
            </ul>
        </div>
        
    </div>
    )
}

export default Ipad;
import React from 'react';
import './hover.css'

const Mac = ({macState}) => {
    return (
        <div className="hoverEffects" onMouseLeave={macState}>
            <div className="iphoneHover" >
                <h3>Explore Macbooks</h3>
                <ul>
                    <li><a href=""> Explore All Macs</a></li>
                    <li><a href=""> Macbook Air</a></li>
                    <li><a href=""> Macbook Pro</a></li>
                    <li><a href=""> iMac</a></li>
                    <li><a href=""> Mac Mini</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Mac;
import React from 'react'
import './hover.css'
export default function Store({ storeState }) {
    return (
        <div className="hoverEffects" onMouseLeave={storeState}>
            <div className="iphoneHover" >
                <h3>Shop</h3>
                <ul>
                    <li><a href="">Shop the Latest</a></li>
                    <li><a href=""> iPhone</a></li>
                    <li><a href=""> iPad</a></li>
                    <li><a href=""> Mac</a></li>
                    <li><a href=""> Apple Watch</a></li>
                </ul>
            </div>
            
        </div>
    )
}

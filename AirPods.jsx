import React from 'react'
import './hover.css'
export default function AirPods({ airpodsState }) {
    return (
        <div className="hoverEffects" onMouseLeave={airpodsState}>
            {/* <Navbar /> */}
            <div className="iphoneHover" >

                <h3>Explore AirPods</h3>
                <ul>
                    <li><a href=""> Explore All AirPods</a></li>
                    <li><a href=""> AirPods Pro 2nd generation</a></li>
                    <li><a href=""> AirPods 2nd generation</a></li>
                    <li><a href=""> Airpods 3rd generation</a></li>
                    <li><a href=""> AirPods Max</a></li>
                </ul>
            </div>
            
        </div>
    )
}

import React from 'react'
import './hover.css'

const Entertainment = ({entertainmentState}) => {
    return (
        <div className="hoverEffects" onMouseLeave={entertainmentState}>
        <div className="iphoneHover" >
            <h3>Explore Entertainment</h3>
            <ul>
                <li><a href=""> Explore Entertainment</a></li>
                <li><a href=""> Apple One</a></li>
                <li><a href=""> Apple TV+</a></li>
                <li><a href=""> Apple Music</a></li>
                <li><a href=""> Apple Fitness+</a></li>
            </ul>
        </div>
        
    </div>
    )
}

export default Entertainment;
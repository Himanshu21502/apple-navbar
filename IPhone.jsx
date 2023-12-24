import React from 'react'
import './hover.css'
const IPhone = ({iPhoneState}) => {
    return (
        <div className="hoverEffects" onMouseLeave={iPhoneState}>
            <div className="iphoneHover" >
                <h3>Explore iPhones</h3>
                <ul>
                    <li><a href=""> Explore All iPhones</a></li>
                    <li><a href=""> iPhone 15 PRO</a></li>
                    <li><a href=""> iPhone 15</a></li>
                    <li><a href=""> iPhone 14 PRO</a></li>
                    <li><a href=""> iPhone 14</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default IPhone;
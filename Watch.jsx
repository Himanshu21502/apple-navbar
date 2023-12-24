import React from 'react'
import './hover.css'
export default function Watch({watchState}) {
  return (
    <div className="hoverEffects" onMouseLeave={watchState}>
            <div className="iphoneHover" >
                <h3>Explore Watch</h3>
                <ul>
                    <li><a href=""> Explore All Apple Watch</a></li>
                    <li><a href=""> Apple Watch Series 9</a></li>
                    <li><a href=""> Apple Watch Ultra 2</a></li>
                    <li><a href=""> Apple Watch SE</a></li>
                    <li><a href=""> Apple Watch Nike</a></li>
                    <li><a href=""> Apple Watch Heremes</a></li>
                </ul>
            </div>
            
        </div>
  )
}

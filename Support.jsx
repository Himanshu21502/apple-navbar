import React from 'react'
import './hover.css'
export default function Support({supportState}) {
  return (
    <div className="hoverEffects" onMouseLeave={supportState}>
            <div className="iphoneHover" >
                <h3>Explore Support</h3>
                <ul>
                    <li><a href=""> iPhone</a></li>
                    <li><a href=""> Mac</a></li>
                    <li><a href=""> iPad</a></li>
                    <li><a href=""> Watch</a></li>
                    <li><a href=""> AirPods</a></li>
                    <li><a href=""> Home</a></li>
                    <li><a href=""> TV</a></li>
                </ul>
            </div>
            
        </div>
  )
}

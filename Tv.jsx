import React from 'react'
import './hover.css'
export default function Tv({tvState}) {
  return (
    <div className="hoverEffects" onMouseLeave={tvState}>
            <div className="iphoneHover" >
                <h3>Explore TV & Home</h3>
                <ul>
                    <li><a href=""> Explore TV & Home</a></li>
                    <li><a href=""> Apple TV 4K</a></li>
                    <li><a href=""> HomePod</a></li>
                    <li><a href=""> HomePod Mini</a></li>    
                </ul>
            </div>
            
        </div>
  )
}

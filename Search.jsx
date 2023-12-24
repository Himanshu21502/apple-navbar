import React from 'react'
import './Search.css';
import { useState } from 'react';
import { current } from 'animated/lib/injectable/InteractionManager';
export default function Search({change}) {
    const [isCrossed, setisCrossed] = useState(false);
     const handlecross= ()=>{
        //  setisCrossed(current=>!current);
         change();
     }
    return (
        <>
            <div className={`search-container `}>
                <div className='search'> </div>
                <div className='search-bar'>
                    <form action="">
                        <input type="text" placeholder='Search apple.com' />
                    </form>
                </div>
                <div className='link-close' onClick={handlecross}></div>
                <div className="quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href=""> Holiday Gifts</a></li>
                        <li><a href=""> Accessories</a></li>
                        <li><a href=""> Gift Cards</a></li>
                        <li><a href=""> Airpods</a></li>
                        <li><a href=""> Apple Trade In</a></li>

                    </ul>
                </div>

            </div>

            <div className={`overlay show`}></div>
        </>
    )
}

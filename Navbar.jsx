import React from 'react'
import { useState } from 'react';
import './Navbar.css';
import { current } from 'animated/lib/injectable/InteractionManager';
import IPhone from '../screens/IPhone';
import Ipad from '../screens/Ipad';
import Search from './Search';
import Entertainment from '../screens/Entertainment';
import Mac from '../screens/Mac';
import Tv from '../screens/Tv';
import Support from '../screens/Support';
import Watch from '../screens/Watch';
import AirPods from '../screens/AirPods';
import Store from '../screens/Store';

export default function () {
  const [isSearch, setIsSearch] = useState(false);
  const [isIphone, setIphone] = useState(false);
  const [isStore, setStore] = useState(false);
  const [isMac, setMac] = useState(false);
  const [isIPad, setIpad] = useState(false);
  const [isWatch, setWatch] = useState(false);
  const [isAirPods, setAirpods] = useState(false);
  const [isEntertainment, setEntertainment] = useState(false);
  const [isSupport, setSupport] = useState(false);
  const [isTV, setTV] = useState(false);

  const [isNav,setNav]=useState(false);

  function handleClick () {
    // toggle isSearch state 
       setIsSearch(!isSearch);
  };

   function iPhoneState(){
     setIphone(current=>!current);
   };
   
   function iPadState () {
     setIpad(current=>!current);
  };
   
  const supportState = () => {
     setSupport(current=>!current);
  };

  const watchState = () => {
    setWatch(current=>!current);
  };

  const macState = () => {
     setMac(current=>!current);
  };
  
  const tvState = () => {
     setTV(current=>!current);
  };

  const airpodsState = () => {
     setAirpods(current=>!current);
  };

  // if(isEntertainment==false && isNav==true)setEntertainment(true);
  //   else setEntertainment(current=>!current);

  const entertainmentState = () => {
     setEntertainment(current=>!current);
  };

  const storeState = () => {
     setStore(current=>!current);
  };
  function changeiphAll(){
      if(isAirPods===true)setAirpods(false);
      if(isEntertainment===true)setEntertainment(false);
      if(isIPad===true)setIpad(false);
      // if(isIphone===true)setIphone(false);
      if(isMac===true)setMac(false);
      if(isSearch===true)setIsSearch(false);
      if(isStore===true)setStore(false);
      if(isSupport===true)setSupport(false);
      if(isTV===true)setTV(false);
      if(isWatch===true)setWatch(false);
  };
  function changeipadAll(){
    if(isAirPods===true)setAirpods(false);
    if(isEntertainment===true)setEntertainment(false);
    // if(isIPad===true)setIpad(false);
    if(isIphone===true)setIphone(false);
    if(isMac===true)setMac(false);
    if(isSearch===true)setIsSearch(false);
    if(isStore===true)setStore(false);
    if(isSupport===true)setSupport(false);
    if(isTV===true)setTV(false);
    if(isWatch===true)setWatch(false);
};
function changeWatchAll(){
  if(isAirPods===true)setAirpods(false);
  if(isEntertainment===true)setEntertainment(false);
  if(isIPad===true)setIpad(false);
  if(isIphone===true)setIphone(false);
  if(isMac===true)setMac(false);
  if(isSearch===true)setIsSearch(false);
  if(isStore===true)setStore(false);
  if(isSupport===true)setSupport(false);
  if(isTV===true)setTV(false);
  // if(isWatch===true)setWatch(false);
};
function changeSuppAll(){
  if(isAirPods===true)setAirpods(false);
  if(isEntertainment===true)setEntertainment(false);
  if(isIPad===true)setIpad(false);
  if(isIphone===true)setIphone(false);
  if(isMac===true)setMac(false);
  if(isSearch===true)setIsSearch(false);
  if(isStore===true)setStore(false);
  // if(isSupport===true)setSupport(false);
  if(isTV===true)setTV(false);
  if(isWatch===true)setWatch(false);
};
function changeEntAll(){
  if(isAirPods===true)setAirpods(false);
  // if(isEntertainment===true)setEntertainment(false);
  if(isIPad===true)setIpad(false);
  if(isIphone===true)setIphone(false);
  if(isMac===true)setMac(false);
  if(isSearch===true)setIsSearch(false);
  if(isStore===true)setStore(false);
  if(isSupport===true)setSupport(false);
  if(isTV===true)setTV(false);
  if(isWatch===true)setWatch(false);
};
function changeAirPodAll(){
  // if(isAirPods===true)setAirpods(false);
  if(isEntertainment===true)setEntertainment(false);
  if(isIPad===true)setIpad(false);
  if(isIphone===true)setIphone(false);
  if(isMac===true)setMac(false);
  if(isSearch===true)setIsSearch(false);
  if(isStore===true)setStore(false);
  if(isSupport===true)setSupport(false);
  if(isTV===true)setTV(false);
  if(isWatch===true)setWatch(false);
};
function changeStoreAll(){
  if(isAirPods===true)setAirpods(false);
  if(isEntertainment===true)setEntertainment(false);
  if(isIPad===true)setIpad(false);
  if(isIphone===true)setIphone(false);
  if(isMac===true)setMac(false);
  if(isSearch===true)setIsSearch(false);
  // if(isStore===true)setStore(false);
  if(isSupport===true)setSupport(false);
  if(isTV===true)setTV(false);
  if(isWatch===true)setWatch(false);
};
function changeMacAll(){
  if(isAirPods===true)setAirpods(false);
  if(isEntertainment===true)setEntertainment(false);
  if(isIPad===true)setIpad(false);
  if(isIphone===true)setIphone(false);
  // if(isMac===true)setMac(false);
  if(isSearch===true)setIsSearch(false);
  if(isStore===true)setStore(false);
  if(isSupport===true)setSupport(false);
  if(isTV===true)setTV(false);
  if(isWatch===true)setWatch(false);
};
function changeTVAll(){
  if(isAirPods===true)setAirpods(false);
  if(isEntertainment===true)setEntertainment(false);
  if(isIPad===true)setIpad(false);
  if(isIphone===true)setIphone(false);
  if(isMac===true)setMac(false);
  if(isSearch===true)setIsSearch(false);
  if(isStore===true)setStore(false);
  if(isSupport===true)setSupport(false);
  // if(isTV===true)setTV(false);
  if(isWatch===true)setWatch(false);
};
function changeAll(){
  if(isAirPods===true)setAirpods(false);
  if(isEntertainment===true)setEntertainment(false);
  if(isIPad===true)setIpad(false);
  if(isIphone===true)setIphone(false);
  if(isMac===true)setMac(false);
  if(isSearch===true)setIsSearch(false);
  if(isStore===true)setStore(false);
  if(isSupport===true)setSupport(false);
  if(isTV===true)setTV(false);
  if(isWatch===true)setWatch(false);
};

  const [isActive, setisActive] = useState(false);
  function handleHamburger(){
      setisActive(current=>!current);
  }
  return (
    <body>
    <div className={`nav-container ${isActive? 'active' : ''}`} >
      <nav className='navbar'  >
          <ul className="mobile-nav">
            <li>
              <div className={`menu-icon-container ${isActive? 'active' : ''}  `}>
                <div className="menu-icon" onClick={handleHamburger}>
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="logo"></a>
            </li>
            <li>
              <a href="#" className="bag"></a>
            </li>
          </ul>

        <ul className={`nav-items ${isSearch? 'hide' : ''}` }   >
          <li className='logo' onMouseEnter={changeAll} ><a href="/"></a></li>
          <li className='store' onMouseEnter={()=>{storeState();changeStoreAll()}} ><a href="" >Store</a></li>
          <li className='mac' onMouseEnter={()=>{macState();changeMacAll()}} ><a href="">Mac</a></li>
          <li className='ipad' onMouseEnter={()=>{iPadState();changeipadAll()}} ><a href="">iPad</a></li>
          <li className='iphone' onMouseEnter={()=>{iPhoneState();changeiphAll()}} ><a href="">iPhone</a></li>
          <li className='watch' onMouseEnter={()=>{watchState();changeWatchAll()}} ><a href="">Watch</a></li>
          <li className='vision' onMouseEnter={changeAll}><a href="/">Vision</a></li>
          <li className='airpods' onMouseEnter={()=>{airpodsState();changeAirPodAll()}} ><a href="">AirPods</a></li>
          <li className='tv' onMouseEnter={()=>{tvState();changeTVAll()}} ><a href="/">TV & Home</a></li>
          <li className='ent' onMouseEnter={()=>{entertainmentState();changeEntAll()}} ><a href="">Entertainment</a></li>
          {/* <li className='accessories'><a href="/">Accessories</a></li> */}
          <li className='support' onMouseEnter={()=>{supportState();changeSuppAll()}} ><a href="">Support</a></li>
          <li className='search' onClick={handleClick} onMouseEnter={changeAll}><a href=""></a></li>
          <li className='bag' onMouseEnter={changeAll}><a href="/"></a></li>

        </ul>
      </nav>
      {/* Adding search button functionality */}
      
    </div>    
    {isSearch? <Search change={handleClick}/> :''}
    {isIphone? <IPhone iPhoneState={iPhoneState}/> :''}
    {isMac? <Mac macState={macState}/> :''}
    {isIPad? <Ipad iPadState={iPadState}/> :''}
    {isEntertainment? <Entertainment entertainmentState={entertainmentState}/>:''}
    {isTV?<Tv tvState={tvState}/>:''}
    {isSupport?<Support supportState={supportState}/>:''}
    {isWatch? <Watch watchState={watchState}/>:''}
    {isAirPods?<AirPods airpodsState={airpodsState}/>:''}
    {isStore?<Store storeState={storeState}/>:''}
    </body>
  )
}

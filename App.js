import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

// import React, { Component } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import posed, { PoseGroup } from 'react-pose'
// import './App.css'
// import TopNav from './screens/TopNav'
// import Home from './screens/Home'
// import Mac from './screens/Mac'
// import Ipad from './screens/Ipad'
// import IPhone from './screens/IPhone'
// import Watch from './screens/Watch'
// import Tv from './screens/Tv'
// import Music from './screens/Music'

// const RoutesBox = posed.div({
//     enter: { x: 0 },
//     exit: { x: 100 }
// })

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <TopNav />
//                 <PoseGroup>
//                     <RoutesBox key={Date.now()}>
//                         <Routes location={window.location}>
//                             <Route exact path="/" component={Home} />
//                             <Route path="/mac" component={Mac} />
//                             <Route path="/ipad" component={Ipad} />
//                             <Route path="/iphone" component={IPhone} />
//                             <Route path="/watch" component={Watch} />
//                             <Route path="/tv" component={Tv} />
//                             <Route path="/music" component={Music} />
//                         </Routes>
//                     </RoutesBox>
//                 </PoseGroup>
//             </div>
//         )
//     }
// }

// export default App;

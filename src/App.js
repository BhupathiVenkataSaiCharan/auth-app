import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Signin from '../src/basic login/Signin';
import Profile from '../src/basic login/Profile';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
          <Route path="*" element={<Navigate replace to="/"/>}/>
          <Route path="/" element={<Navigate replace to="/signin"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

















































// import React from 'react';
// import { BrowserRouter, Routes, Route,  } from "react-router-dom";
// import Home from './Home';
// import Login from './Login';
// import Dashboard from './Dashboard';NavLink
// import Profile from './basic login/Profile';
// import Signin from './basic login/Signin';



// function App() {

//   return (
//     <div className="App">
//       <BrowserRouter>
//       <div className="header">
//         <NavLink exact="true" to="/">Home</NavLink>
//         <NavLink to="/login">Login<small>(access without token)</small></NavLink>
//         <NavLink to="/dashboard">Dashboard<small>(access with token only)</small></NavLink>
//       </div>
//       <div className='content'>
//         <Routes>
//           <Route exact="true" path="/" element={<Home/>} />
//           <Route exact="true" path="/login" element={<Login/>} />
//           <Route exact="true" path="/dashboard" element={<Dashboard/>} />
//         </Routes>
//       </div>
//       </BrowserRouter>
//     </div>
//     <div>
//       <div>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/"><Signin/></Route>
//             <Route path="/profile"><Profile/></Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </div>  
//   );
// }

// export default App;

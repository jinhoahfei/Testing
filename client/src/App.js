import React,{Suspense} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Loginpage from './components/Loginpage/Loginpage';
import Registerpage from './components/Registerpage/Registerpage';
import Mainpage from './components/Mainpage/Mainpage';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element ={<Registerpage />} />
        </Routes>
      </Suspense>
    </Router>    

  );
}

export default App;

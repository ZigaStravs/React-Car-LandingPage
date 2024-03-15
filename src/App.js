import React from 'react'
import Handle from './Components/Handle';
import Navbar from './Components/Navbar';
import Option from './Components/Option';
import Power from './Components/Power';
import Speedy from './Components/Speedy';

function App() {
  return (
    <div>
     <Navbar/>
     <Power/>
     <Speedy/>
     <Handle/>
     <Option/>
    </div>
  );
}

export default App;

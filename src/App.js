import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shopping from './components/Shopping';
import Contacts from './components/Contacts';
import Fixit from './components/Fixit';
import About from './components/About';
import FixitRepairGuide from './components/FixitRepairGuide';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="fixit" element={<Fixit />} />
          <Route path="about" element={<About />} />
          <Route path="fixitrepairguide" element={<FixitRepairGuide />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;

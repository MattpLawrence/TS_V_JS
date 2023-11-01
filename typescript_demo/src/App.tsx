import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import TypeExample from './modules/1-simpleCalculator/TypeExample';
import UseConcactStrings from './modules/2-methodUpdates/JS/UseConcactStrings';
import SideNav from './common/sideNav';
import CustomInput from './modules/3-autoComplete/JS/Custominput';

function App() {
  return (

    <Router>
      <div className="App">
        <SideNav />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<TypeExample />} />
            <Route path="/methodUpdates" element={<UseConcactStrings />} />
            <Route path="/autoComplete" element={<CustomInput />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;

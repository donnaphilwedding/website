import React, { FC } from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Schedule } from './pages/Schedule';
import { Travel } from './pages/Travel';
import { Accommodation } from './pages/Accommodation';

export const App: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/travel" element={<Travel />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

import React, { FC } from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Schedule } from './pages/Schedule';

export const App: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

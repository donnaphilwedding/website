import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Schedule } from './pages/Schedule';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

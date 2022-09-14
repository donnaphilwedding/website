import React, { FC } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home></Home>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

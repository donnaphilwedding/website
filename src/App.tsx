import React, { FC, Suspense } from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Schedule } from './pages/Schedule';
import { Travel } from './pages/Travel';
import { Accommodation } from './pages/Accommodation';
import ScrollToTop from './components/ScrollToTop';
import { Login } from './pages/Login';
import { RequireLogin } from './components/auth/RequireLogin';
import { UserContextProvider } from './components/auth/UserContext';
import { Faq } from './pages/Faq';
import { Loader } from './components/Loader';

export const App: FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <UserContextProvider>
        <Suspense
        >
          <Routes>
            <Route element={<RequireLogin />}>
              <Route path="/" element={<Home />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/faq" element={<Faq />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </UserContextProvider>
    </HashRouter>
  );
};

export default App;

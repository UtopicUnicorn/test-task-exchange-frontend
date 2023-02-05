import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import ExchangePage from './pages/exchange-page';
import Auth from './pages/auth';
import ProtectedRoute from './components/protected-route';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ExchangePage />
              </ProtectedRoute>
            }
          />
          <Route path="sign-in" element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

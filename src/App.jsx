// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import BusinessManagement from './components/BusinessManagement';
import InventoryManagement from './components/InventoryManagement';
import SalesManagement from './components/SalesManagement';
import Insights from './components/Insights';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/businesses" element={<BusinessManagement />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/sales" element={<SalesManagement />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

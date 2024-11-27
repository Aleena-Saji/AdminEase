import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing necessary router components

// Importing components for each page
import Landing from './components/LandingPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Roles from './components/Roles';
import Permissions from './components/Permissions';

import './App.css'; // Import CSS for styling

const App = () => {
  return (
    <Router> {/* Wrap the entire application with Router */}
      <Routes>
        {/* Define routes for all the components/pages */}
        <Route path="/" element={<Landing />} /> {/* Landing Page */}
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Admin Dashboard */}
        <Route path="/users" element={<Users />} /> {/* Users Management Page */}
        <Route path="/roles" element={<Roles />} /> {/* Roles Management Page */}
        <Route path="/permissions" element={<Permissions />} /> {/* Permissions Management Page */}
      </Routes>
    </Router>
  );
};

export default App;

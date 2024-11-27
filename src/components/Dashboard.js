import React from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1> {/* Dashboard Title */}
        <nav> {/* Buttons Section */}
          <Link to="/users">
            <button>Users</button>
          </Link>
          <Link to="/roles">
            <button>Roles</button>
          </Link>
          <Link to="/permissions">
            <button>Permissions</button>
          </Link>
        </nav>
      </header>

      <div className="overview">
        <div className="card">
          <h2>Total Users</h2>
          <p>120</p>
        </div>
        <div className="card">
          <h2>Active Roles</h2>
          <p>5</p>
        </div>
        <div className="card">
          <h2>Pending Requests</h2>
          <p>8</p>
        </div>
      </div>

      <div className="activity">
        <h2>Recent Activities</h2>
        <ul>
          <li>User "Aleena" created a new role "Manager"</li>
          <li>User "Aishwaria" updated permissions for "Editor" role</li>
          <li>User "Alisha" deleted a user "Test User"</li>
        </ul>
      </div>

      <footer className="dashboard-footer">
        <p>&copy; 2024 AdminEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;

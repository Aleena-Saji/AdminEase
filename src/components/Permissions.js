import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Permissions.css';

const Permissions = () => {
  const navigate = useNavigate();

  const [permissions, setPermissions] = useState([
    'View Users',
    'Edit Roles',
    'Delete Records',
  ]);
  const [newPermission, setNewPermission] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddPermission = () => {
    if (newPermission.trim() && !permissions.includes(newPermission.trim())) {
      setPermissions([...permissions, newPermission.trim()]);
      setNewPermission('');
      setIsAdding(false);
    } else {
      alert('Please enter a valid, unique permission.');
    }
  };

  const handleEditPermission = (index) => {
    const updatedPermission = prompt('Edit Permission:', permissions[index]);
    if (updatedPermission && !permissions.includes(updatedPermission.trim())) {
      const updatedPermissions = [...permissions];
      updatedPermissions[index] = updatedPermission.trim();
      setPermissions(updatedPermissions);
    } else {
      alert('Permission already exists or invalid input.');
    }
  };

  const handleDeletePermission = (index) => {
    const updatedPermissions = permissions.filter((_, i) => i !== index);
    setPermissions(updatedPermissions);
  };

  return (
    <div className="permissions-page">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        Back
      </button>
      <h1>Manage Permissions</h1>
      

      <div className="permission-actions">
        <button onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? 'Cancel' : 'Add New Permission'}
        </button>
      </div>

      {isAdding && (
        <div className="add-permission-form">
          <input
            type="text"
            placeholder="Enter new permission"
            value={newPermission}
            onChange={(e) => setNewPermission(e.target.value)}
          />
          <button onClick={handleAddPermission}>Add Permission</button>
        </div>
      )}

      <ul className="permission-list">
        {permissions.map((permission, index) => (
          <li key={index}>
            {permission}
            <div className="permission-buttons">
              <button onClick={() => handleEditPermission(index)}>Edit</button>
              <button onClick={() => handleDeletePermission(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Permissions;

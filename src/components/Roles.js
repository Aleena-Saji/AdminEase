import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Roles.css';

const Roles = () => {
  const navigate = useNavigate();

  const [roles, setRoles] = useState(['Admin', 'Editor', 'Viewer']);
  const [newRole, setNewRole] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddRole = () => {
    if (newRole.trim() && !roles.includes(newRole.trim())) {
      setRoles([...roles, newRole.trim()]);
      setNewRole('');
      setIsAdding(false);
    } else {
      alert('Please enter a valid, unique role.');
    }
  };

  const handleEditRole = (index) => {
    const updatedRole = prompt('Edit Role:', roles[index]);
    if (updatedRole && !roles.includes(updatedRole.trim())) {
      const updatedRoles = [...roles];
      updatedRoles[index] = updatedRole.trim();
      setRoles(updatedRoles);
    } else {
      alert('Role already exists or invalid input.');
    }
  };

  const handleDeleteRole = (index) => {
    const updatedRoles = roles.filter((_, i) => i !== index);
    setRoles(updatedRoles);
  };

  return (
    <div className="roles-page">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        Back
      </button>
      <h1>Manage Roles</h1>
      

      <div className="role-actions">
        <button onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? 'Cancel' : 'Add New Role'}
        </button>
      </div>

      {isAdding && (
        <div className="add-role-form">
          <input
            type="text"
            placeholder="Enter new role"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          />
          <button onClick={handleAddRole}>Add Role</button>
        </div>
      )}

      <div className="role-list">
        <h2>Role List</h2>
        <ul>
          {roles.map((role, index) => (
            <li key={index}>
              {role}
              <div className="role-buttons">
                <button onClick={() => handleEditRole(index)}>Edit</button>
                <button onClick={() => handleDeleteRole(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Roles;

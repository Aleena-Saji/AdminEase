import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Users.css';

const Users = () => {
  const navigate = useNavigate();

  const initialUsers = [
    { id: 1, name: 'Aleena', role: 'Admin' },
    { id: 2, name: 'Aishwarya', role: 'Editor' },
    { id: 3, name: 'Alisha', role: 'Viewer' },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ name: '', role: '' });
  const [isAdding, setIsAdding] = useState(false);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.role) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: '', role: '' });
      setIsAdding(false);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    const updatedName = prompt('Edit Name:', userToEdit.name);
    const updatedRole = prompt('Edit Role:', userToEdit.role);

    if (updatedName && updatedRole) {
      setUsers(users.map((user) => (user.id === id ? { ...user, name: updatedName, role: updatedRole } : user)));
    } else {
      alert('Please provide valid input for both name and role.');
    }
  };

  return (
    <div className="users-page">
      <button className="back-button" onClick={() => navigate('/dashboard')}>
        Back
      </button>
      <h1>Manage Users</h1>

      <button className="add-user-btn" onClick={() => setIsAdding(!isAdding)}>
        {isAdding ? 'Cancel' : 'Add New User'}
      </button>

      {isAdding && (
        <div className="add-user-form">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
          <button onClick={handleAddUser}>Add User</button>
        </div>
      )}

      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEditUser(user.id)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

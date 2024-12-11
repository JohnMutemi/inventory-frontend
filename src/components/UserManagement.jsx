// components/UserManagement.jsx
import React, { useState, useEffect } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2 className="text-primary">User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;

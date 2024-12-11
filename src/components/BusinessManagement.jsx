// components/BusinessManagement.jsx
import React, { useState, useEffect } from 'react';

const BusinessManagement = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch('/businesses/1') // Example user_id = 1
      .then((res) => res.json())
      .then((data) => setBusinesses(data));
  }, []);

  return (
    <div>
      <h2 className="text-primary">Business Management</h2>
      <ul>
        {businesses.map((business) => (
          <li key={business.id}>
            {business.name} - {business.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessManagement;

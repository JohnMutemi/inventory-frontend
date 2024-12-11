import React, { useState } from 'react';

const SalesManagement = () => {
  const [sale, setSale] = useState({
    inventory_id: '',
    quantity_sold: '',
    total_price: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sale),
    });
  };

  return (
    <div>
      <h2 className="text-primary">Sales Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Inventory ID"
          onChange={(e) => setSale({ ...sale, inventory_id: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity Sold"
          onChange={(e) => setSale({ ...sale, quantity_sold: e.target.value })}
        />
        <input
          type="number"
          placeholder="Total Price"
          onChange={(e) => setSale({ ...sale, total_price: e.target.value })}
        />
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SalesManagement;

import React, { useState, useEffect } from 'react';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch('/inventory/1')
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <div>
      <h2 className="text-primary">Inventory Management</h2>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            {item.item_name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryManagement;

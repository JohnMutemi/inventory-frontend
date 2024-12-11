// components/Insights.jsx
import React, { useState, useEffect } from 'react';

const Insights = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetch('/insights/comprehensive/1') // Example business_id = 1
      .then((res) => res.json())
      .then((data) => setInsights(data));
  }, []);

  return (
    <div>
      <h2 className="text-primary">Insights</h2>
      <ul>
        {insights.map((insight, index) => (
          <li key={index}>
            {insight.metric}: {insight.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Insights;

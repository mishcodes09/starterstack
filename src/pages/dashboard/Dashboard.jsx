import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <h1>Dashboard</h1>
        <p>Welcome to your StarterStack dashboard!</p>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Your Applications</h3>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card">
            <h3>Profile Views</h3>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card">
            <h3>Skills Progress</h3>
            <p className="stat-number">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

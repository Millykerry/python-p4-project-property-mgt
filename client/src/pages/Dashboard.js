import React, { useEffect, useState } from "react";

function Dashboard() {
  const [counts, setCounts] = useState({ properties: 0, tenants: 0, payments: 0 });

  useEffect(() => {
    const fetchCounts = async () => {
      const [propRes, tenantRes, payRes] = await Promise.all([
        fetch("http://localhost:5000/properties"),
        fetch("http://localhost:5000/tenants"),
        fetch("http://localhost:5000/payments")
      ]);
      const [properties, tenants, payments] = await Promise.all([
        propRes.json(), tenantRes.json(), payRes.json()
      ]);
      setCounts({ properties: properties.length, tenants: tenants.length, payments: payments.length });
    };
    fetchCounts();
  }, []);

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">Total Properties</div>
          <div className="card-body">
            <h5 className="card-title">{counts.properties}</h5>
            <p className="card-text">Manage all rental properties</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-success mb-3">
          <div className="card-header">Tenants</div>
          <div className="card-body">
            <h5 className="card-title">{counts.tenants}</h5>
            <p className="card-text">Track tenant information</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-warning mb-3">
          <div className="card-header">Payments</div>
          <div className="card-body">
            <h5 className="card-title">{counts.payments}</h5>
            <p className="card-text">Monitor rent payments</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
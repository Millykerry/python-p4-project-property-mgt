import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tenants() {
  const [tenants, setTenants] = useState([]);

  const fetchTenants = async () => {
    const res = await fetch("http://localhost:5000/tenants");
    const data = await res.json();
    setTenants(data);
  };

  const deleteTenant = async (id) => {
    await fetch(`http://localhost:5000/tenants/${id}`, { method: "DELETE" });
    setTenants(tenants.filter(t => t.id !== id));
  };

  useEffect(() => { fetchTenants(); }, []);

  return (
    <div>
      <h2>Tenants <Link to="/add-tenant" className="btn btn-sm btn-primary ms-2">Add Tenant</Link></h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {tenants.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.name}</td>
              <td>{t.email}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => deleteTenant(t.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tenants;
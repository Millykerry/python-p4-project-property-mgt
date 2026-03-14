import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Properties() {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    const res = await fetch("http://localhost:5000/properties");
    const data = await res.json();
    setProperties(data);
  };

  const deleteProperty = async (id) => {
    await fetch(`http://localhost:5000/properties/${id}`, { method: "DELETE" });
    setProperties(properties.filter(p => p.id !== id));
  };

  useEffect(() => { fetchProperties(); }, []);

  return (
    <div>
      <h2>Properties <Link to="/add-property" className="btn btn-sm btn-primary ms-2">Add Property</Link></h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Address</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.address}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => deleteProperty(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Properties;
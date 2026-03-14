import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">PropertyMgmt</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/properties">Properties</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tenants">Tenants</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/payments">Payments</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
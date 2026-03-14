import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Properties from "./pages/Properties";
import Tenants from "./pages/Tenants";
import Payments from "./pages/Payments";
import AddProperty from "./pages/AddProperty";
import AddTenant from "./pages/AddTenant";
import AddPayment from "./pages/AddPayment";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/add-tenant" element={<AddTenant />} />
          <Route path="/add-payment" element={<AddPayment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
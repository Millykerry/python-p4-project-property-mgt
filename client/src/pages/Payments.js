import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Payments() {
  const [payments, setPayments] = useState([]);

  const fetchPayments = async () => {
    const res = await fetch("http://localhost:5000/payments");
    const data = await res.json();
    setPayments(data);
  };

  const deletePayment = async (id) => {
    await fetch(`http://localhost:5000/payments/${id}`, { method: "DELETE" });
    setPayments(payments.filter(p => p.id !== id));
  };

  useEffect(() => { fetchPayments(); }, []);

  return (
    <div>
      <h2>Payments <Link to="/add-payment" className="btn btn-sm btn-primary ms-2">Add Payment</Link></h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr><th>ID</th><th>Tenant</th><th>Amount</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {payments.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.tenant_name}</td>
              <td>{p.amount}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => deletePayment(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payments;
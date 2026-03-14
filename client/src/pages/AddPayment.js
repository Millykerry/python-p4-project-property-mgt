import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

function AddPayment() {
  const navigate = useNavigate();
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const fetchTenants = async () => {
      const res = await fetch("http://localhost:5000/tenants");
      const data = await res.json();
      setTenants(data);
    };
    fetchTenants();
  }, []);

  return (
    <div>
      <h2>Add Payment</h2>
      <Formik
        initialValues={{ tenant_id: "", amount: "" }}
        onSubmit={async (values) => {
          await fetch("http://localhost:5000/payments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
          });
          navigate("/payments");
        }}
      >
        <Form>
          <div className="mb-3">
            <label className="form-label">Tenant</label>
            <Field as="select" name="tenant_id" className="form-select">
              <option value="">Select Tenant</option>
              {tenants.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            </Field>
          </div>
          <div className="mb-3">
            <label className="form-label">Amount</label>
            <Field name="amount" type="number" className="form-control" />
          </div>
          <button type="submit" className="btn btn-success">Add Payment</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddPayment;
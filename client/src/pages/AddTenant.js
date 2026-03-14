import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

function AddTenant() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Add Tenant</h2>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await fetch("http://localhost:5000/tenants", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
          });
          navigate("/tenants");
        }}
      >
        <Form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <Field name="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <Field name="email" type="email" className="form-control" />
          </div>
          <button type="submit" className="btn btn-success">Add Tenant</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddTenant;
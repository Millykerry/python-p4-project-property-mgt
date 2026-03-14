import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

function AddProperty() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Add Property</h2>
      <Formik
        initialValues={{ name: "", address: "" }}
        onSubmit={async (values) => {
          await fetch("http://localhost:5000/properties", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
          });
          navigate("/properties");
        }}
      >
        <Form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <Field name="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <Field name="address" className="form-control" />
          </div>
          <button type="submit" className="btn btn-success">Add Property</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddProperty;
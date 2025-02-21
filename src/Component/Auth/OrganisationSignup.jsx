import React, { useState } from "react";
import Input from "../Common/Input";
import styles from "./OrganisationSignup.module.css";
import Button from "../Common/Button";
import { Link } from "react-router-dom";

export default function OrganisationSignup() {
  const [form, setForm] = useState({
    name: {
      firstname: "",
      lastname: "",
    },
    email: "",
    phone: "",
    country: "",
    jobTitle: "",
    company: "",
    employees: "",
    policy: false, 
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setForm((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      // Handle regular fields
      setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const onClick = () => {
    console.log("Form Data:", form);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Create Organisation Account</h3>

      <div className={styles.name}>
        <Input label="Firstname" name="name.firstname" value={form.name.firstname} onChange={onChange} />
        <Input label="Lastname" name="name.lastname" value={form.name.lastname} onChange={onChange} />
      </div>

      <div>
        <Input label="Email" name="email" value={form.email} onChange={onChange} />
      </div>

      <div className={styles.contact}>
        <Input label="Phone" name="phone" value={form.phone} onChange={onChange} />
        <Input label="Country" name="country" value={form.country} onChange={onChange} />
      </div>

      <div>
        <Input label="Job Title" name="jobTitle" value={form.jobTitle} onChange={onChange} />
      </div>

      <div>
        <Input label="Company" name="company" value={form.company} onChange={onChange} />
        <Input label="Employees" name="employees" value={form.employees} onChange={onChange} />
      </div>

      <div className={styles.policy}>
        <input type="checkbox" name="policy" checked={form.policy} onChange={onChange} />
        <p>
          I agree to the <a href="#">Terms and Conditions</a>
        </p>
      </div>

      <div className={styles.button}>
        <Button text="Create Account" onClick={onClick} />
      </div>

      <div className={styles.login}>
        Have an Account ? <Link to="/auth/login/organisation">Login</Link>
      </div>
    </div>
  );
}

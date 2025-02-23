import React, { useState } from "react";
// import Select from "../Common/Select"; // Import Select component
import styles from "./OrganisationSignup.module.css";
import Button from "../Common/Button";
import { Link } from "react-router-dom";
import Input from "../Common/Input";
import { countryOptions, commonJobs, commonCompanies, employeeRanges } from "../../constants";
import ActionSearchBar from "../Common/ActionSearchBar";

export default function OrganisationSignup() {
  const [form, setForm] = useState({
    name: { firstname: "", lastname: "" },
    contact: { phone: "", country: "" },
    email: "",
    jobTitle: "",
    company: "",
    employees: "",
    policy: false,
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const nameRegex = /^(?=(.*[A-Za-zÀ-ÖØ-öø-ÿ]){3,})[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[0-9]{10}$/;

  const validateField = (name, value) => {
    let errorMessage = "";

    if (name === "name.firstname" || name === "name.lastname") {
      if (!value.trim()) errorMessage = "This field is required.";
      else if (!nameRegex.test(value))
        errorMessage = "Must contain at least 3 alphabets.";
    }

    if (name === "email") {
      if (!value.trim()) errorMessage = "Email is required.";
      else if (!emailRegex.test(value)) errorMessage = "Invalid email format.";
    }

    if (name === "contact.phone") {
      if (!value.trim()) errorMessage = "Phone number is required.";
      else if (!phoneRegex.test(value))
        errorMessage = "Phone must be 10 digits.";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name.includes(".") ? name.split(".")[1] : name]: errorMessage,
    }));
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target || {}; // Handling both input and select elements

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setForm((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
      validateField(name, value);
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
      validateField(name, value);
    }
  };

  const isFormValid = () =>
    Object.values(errors).every((err) => err === "") &&
    form.name.firstname.trim() &&
    form.name.lastname.trim() &&
    form.contact.phone.trim() &&
    form.email.trim();

  const onClick = () => {
    if (isFormValid()) {
      console.log("Form Data:", form);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Create Organisation Account</h3>

      {/* Firstname & Lastname in one line */}
      <div className={styles.row}>
        <div className={styles.inputWrapper}>
          <Input
            type="text"
            label="Firstname"
            name="name.firstname"
            value={form.name.firstname}
            onChange={onChange}
            className={errors.firstname ? styles.inputError : ""}
          />
          {errors.firstname && (
            <p className={styles.error}>{errors.firstname}</p>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <Input
            type="text"
            label="Lastname"
            name="name.lastname"
            value={form.name.lastname}
            onChange={onChange}
            className={errors.lastname ? styles.inputError : ""}
          />
          {errors.lastname && <p className={styles.error}>{errors.lastname}</p>}
        </div>
      </div>

      {/* Email */}
      <div className={styles.inputWrapper}>
        <Input
          type="email"
          label="Email"
          name="email"
          value={form.email}
          onChange={onChange}
          className={errors.email ? styles.inputError : ""}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>

      {/* Phone & Country in one line */}
      <div className={styles.row}>
        <div className={styles.inputWrapper}>
          <Input
            type="number"
            label="Phone"
            name="contact.phone"
            value={form.contact.phone}
            onChange={onChange}
            className={errors.phone ? styles.inputError : ""}
          />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}
        </div>

        <div className={styles.inputWrapper}>
          {/* <Select
            label="Country"
            name="contact.country"
            options={countryOptions}
            value={form.contact.country}
            onChange={(e) =>
              onChange({
                target: { name: "contact.country", value: e.target.value },
              })
            }
          /> */}
          <ActionSearchBar
            allActions={countryOptions}
            label={"Country"}
            onChange={(selectedCountry) =>
              onChange({
                target: { name: "contact.country", value: selectedCountry },
              })
            }
          />

          {console.log(form)}
        </div>
      </div>

      {/* Job Title */}
      <div>
        {/* <Input
          label="Job Title"
          name="jobTitle"
          value={form.jobTitle}
          onChange={onChange}
        /> */}
        <ActionSearchBar
          label="Job Title"
          allActions={commonJobs}
          onChange={(selectedJob) =>
            onChange({
              target: { name: "jobTitle", value: selectedJob },
            })
          }
        />
      </div>

      {/* Company & Employees */}
      <div className={styles.row}>
        {/* <Input
          label="Company"
          name="company"
          value={form.company}
          onChange={onChange}
        /> */}
        <ActionSearchBar
          label="Company"
          allActions={commonCompanies}
          onChange={(selectedCompany) =>
            onChange({
              target: { name: "company", value: selectedCompany },
            })
          }
        />
        {/* <Input
          label="Employees"
          name="employees"
          value={form.employees}
          onChange={onChange}
        /> */}

        <ActionSearchBar
          label="Emplloyees"
          allActions={employeeRanges}
          onChange={(range) =>
            onChange({
              target: { name: "employee", value: range },
            })
          }
        />
      </div>

      {/* Terms & Conditions */}
      <div className={styles.policy}>
        <input
          type="checkbox"
          name="policy"
          checked={form.policy}
          onChange={onChange}
        />
        <p>
          I agree to the <a href="#">Terms and Conditions</a>
        </p>
      </div>

      {/* Submit Button */}
      <div className={styles.button}>
        <Button
          type="submit"
          text="Create Account"
          onClick={onClick}
          disabled={!isFormValid()}
        />
      </div>

      <div className={styles.login}>
        Have an Account? <Link to="/auth/login/organisation">Login</Link>
      </div>
    </div>
  );
}

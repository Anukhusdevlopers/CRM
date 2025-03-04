import React, { useState } from "react";
import styles from "./PopupForm.module.css";
import ActionSearchBar from "../../Common/ActionSearchBar";

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    website: "",
    location: "",
    employment: "Full time",
    description: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
  });

  console.log(formData);

  const employmentOptions = [
    { label: "Employment", value: "" },
    { label: "Full time", value: "Full time" },
    { label: "Part time", value: "Part time" },
    { label: "Contract", value: "Contract" },
    { label: "Freelance", value: "Freelance" },
  ];

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close when clicking outside the form
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <h2>🗂 Employee Details</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ✖
          </button>
        </div>

        <form className={styles.form}>
          <label>Title*</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            placeholder="Product Designer"
            required
          />

          <label>Company*</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={onChange}
            placeholder="Search for company"
            required
          />

          <label>Website*</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={onChange}
            placeholder="https://www.example.com"
          />

          <label>Location*</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={onChange}
            placeholder="Search for city"
            required
          />

          <label>Employment*</label>
          <ActionSearchBar
            allActions={employmentOptions}
            placeholder="Employment"
            onChange={(selectedValue) =>
              setFormData((prev) => ({ ...prev, employment: selectedValue }))
            }
          />

          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={onChange}
            placeholder="Brief job description (max 400 chars)"
            maxLength="400"
          ></textarea>

          <div className={styles.dateContainer}>
            <div>
              <label>Start date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={onChange}
              />
            </div>

            <div>
              <label>End date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={onChange}
                disabled={formData.currentlyWorking}
              />
            </div>
          </div>

          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="currentlyWorking"
              checked={formData.currentlyWorking}
              onChange={onChange}
            />
            <label>I currently work here</label>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Add experience
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;

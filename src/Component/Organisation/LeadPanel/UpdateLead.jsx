import React, { useState, useEffect, useRef } from "react";
import styles from "./UpdateLead.module.css";
import { X } from "lucide-react";

export default function UpdateLead({ selectedLead, setUpdateLead }) {
  const [formData, setFormData] = useState({
    tags: "hot",
    followUp: false,
    dead: false,
    customer: false,
    followUpDate: "",
    followUpTime: "",
    reason: "",
  });

  const formRef = useRef(null);

  // ✅ Ensures only one checkbox is selected
  const handleCheckboxChange = (selectedName) => {
    setFormData((prev) => ({
      ...prev,
      followUp: false,
      dead: false,
      customer: false,
      [selectedName]: true, // Only the clicked one is true
    }));
  };

  // ✅ Handles all other form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      handleCheckboxChange(name);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // ✅ Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // TODO: Send formData to backend if required
  };

  // ✅ Closes form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setUpdateLead(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setUpdateLead]);

  return (
    <div className={styles.overlay}>
      <div className={styles.container} ref={formRef}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={() => setUpdateLead(null)}>
          <X />
        </button>

        <h2 className={styles.heading}>Lead Updation Form</h2>
        <p className={styles.note}>
          <strong>Note:</strong> Call Picked: <strong>Yes</strong>, Call Duration: <strong>2 mins</strong>
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Tags Dropdown */}
          <label htmlFor="tags" className={styles.label}>Tags:</label>
          <select id="tags" name="tags" value={formData.tags} onChange={handleChange} className={styles.input}>
            <option value="hot">Hot</option>
            <option value="warm">Warm</option>
            <option value="cold">Cold</option>
          </select>

          {/* Checkbox Selection (Only One Allowed) */}
          <label className={styles.label}>Lead Status:</label>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="followUp" checked={formData.followUp} onChange={handleChange} />
              Follow-up
            </label>

            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="dead" checked={formData.dead} onChange={handleChange} />
              Dead
            </label>

            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="customer" checked={formData.customer} onChange={handleChange} />
              Customer
            </label>
          </div>

          {/* Schedule Follow-Up */}
          <label className={styles.label}>Schedule Follow-Up:</label>
          <div className={styles.followup}>
            <input type="date" name="followUpDate" value={formData.followUpDate} onChange={handleChange} className={styles.input} />
            <input type="time" name="followUpTime" value={formData.followUpTime} onChange={handleChange} className={styles.input} />
          </div>

          {/* Reason Input */}
          <label htmlFor="reason" className={styles.label}>Reason:</label>
          <textarea id="reason" name="reason" value={formData.reason} onChange={handleChange} className={styles.textarea} />

          {/* Submit Button */}
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

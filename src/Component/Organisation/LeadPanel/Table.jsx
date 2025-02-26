import React, { useState } from "react";
import styles from "./Table.module.css";

const Table = ({ data }) => {
  const [checkedItems, setCheckedItems] = useState(
    new Array(data.length).fill(false)
  );
  const [isAllChecked, setIsAllChecked] = useState(false);

  // Handle header checkbox
  const handleSelectAll = () => {
    const newCheckedState = !isAllChecked;
    setIsAllChecked(newCheckedState);
    setCheckedItems(new Array(data.length).fill(newCheckedState));
  };

  // Handle individual checkbox
  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];

    // Update "Select All" state based on individual selections
    const allChecked = updatedCheckedItems.every((checked) => checked);
    setIsAllChecked(allChecked);

    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={isAllChecked}
                onChange={handleSelectAll}
              />
            </th>
            <th>Profile</th>
            <th>Contact</th>
            <th>Company</th>
            <th>Status</th>
            <th>Estimate Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={checkedItems[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td>
                <div className={styles.profileCell}>
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    <span>{item.time}</span>
                  </div>
                </div>
              </td>
              <td>{item.email}</td>
              <td>
                <div className={styles.companyCell}>
                  <span>{item.company}</span>
                </div>
              </td>
              <td>
                <span
                  className={`${styles.status} ${styles[item.status.toLowerCase()]}`}
                >
                  {item.status}
                </span>
              </td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

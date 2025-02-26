import React, { useState } from "react";
import styles from "./LeadPanel.module.css";
import TotalEstimate from "../../Component/Organisation/LeadPanel/TotalEstimate";
import Customer from "../../Component/Organisation/LeadPanel/Customer";
import Employee from "../../Component/Organisation/LeadPanel/Employee";
import Select from "../../Component/Common/Select";
import { generateStaticDummyData } from "../../constants/index";
import Table from "../../Component/Organisation/LeadPanel/Table";
import Grid from "../../Component/Organisation/LeadPanel/Grid";
import Popup from "../../Component/Organisation/LeadPanel/Popup";
export default function LeadPanel() {
  const [view, setView] = useState("table"); // Toggle between Table & Grid
  const [searchQuery, setSearchQuery] = useState(""); // Store search input
  const [sortBy, setSortBy] = useState(null); // Sorting selection

  const sortOptions = [
    { value: null, label: "Sort by" },
    { value: "N-A2Z", label: "Name A-Z" },
    { value: "N-Z2A", label: "Name Z-A" },
    { value: "C-A2Z", label: "Company A-Z" },
    { value: "C-Z2A", label: "Company Z-A" },
    { value: "V-ASC", label: "Estimate Low to High" }, // Low to High
    { value: "V-DESC", label: "Estimate High to Low" }, // High to Low
  ];

  const tableData = generateStaticDummyData();

  // Filter data based on searchQuery (name, email, company)
  const filteredData = tableData.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Sorting logic
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortBy) return 0;

    switch (sortBy) {
      case "N-A2Z":
        return a.name.localeCompare(b.name);
      case "N-Z2A":
        return b.name.localeCompare(a.name);
      case "C-A2Z":
        return a.company.localeCompare(b.company);
      case "C-Z2A":
        return b.company.localeCompare(a.company);
      case "V-ASC":
        return parseFloat(a.value.replace("$", "")) - parseFloat(b.value.replace("$", ""));
      case "V-DESC":
        return parseFloat(b.value.replace("$", "")) - parseFloat(a.value.replace("$", ""));
      default:
        return 0;
    }
  });

  return (
    <div className={styles.leadpanel}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.left}>
            <h2>Lead Panel</h2>
            <div className={styles.icon}></div>
          </div>
          <div className={styles.right}>
            <button>Share</button>
            <button>+ Add Employee</button>
            <div className={styles.icons}>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
              <div className={styles.icon}></div>
            </div>
          </div>
        </div>

        <div className={styles.total}>
          <div className={styles.estimate}>
            <TotalEstimate />
          </div>
          <div className={styles.customerAndEmployee}>
            <Customer />
            <Employee />
          </div>
        </div>

        <div className={styles.tablecontainer}>
          <div className={styles.tablehead}>
            <div className={styles.tabs}>
              <span className={styles.tab}>
                <div className={styles.icon}></div> All
              </span>
              <span className={styles.tab}>
                <div className={styles.icon}></div> Company
              </span>
              <span className={styles.tab}>
                <div className={styles.icon}></div> Contact
              </span>
              <span className={styles.tab}>
                <div className={styles.icon}></div> Estimate Value
              </span>
              <span className={styles.tab}>
                <div className={styles.icon}></div> +
              </span>
            </div>
            <hr />
            <div className={styles.searchs}>
              <div className={styles.searchleft}>
                <div className={styles.search}>
                  <input
                    placeholder="Search by Name, Email, or Company"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <span>Import</span>
              </div>
              <div className={styles.searchright}>
                <div className={styles.view}>
                  <button
                    className={view === "table" ? styles.active : styles.inactive}
                    onClick={() => setView("table")}
                  >
                    <div className={styles.icon}></div> List
                  </button>
                  <button
                    className={view === "grid" ? styles.active : styles.inactive}
                    onClick={() => setView("grid")}
                  >
                    <div className={styles.icon}></div> Grid
                  </button>
                </div>
                <div>
                  <Select options={sortOptions} onChange={(e) => setSortBy(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
              {/* <Popup data={sortedData}/> */}
          <div className={styles.tablebody}>
            {view === "table" ? <Table data={sortedData} /> : <Grid data={sortedData} />}
          </div>
        </div>
      </div>
    </div>
  );
}

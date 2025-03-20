import React, { useState } from "react";
import styles from "./LeadPanel.module.css";
import TotalEstimate from "../../Component/Organisation/LeadPanel/TotalEstimate";
import Customer from "../../Component/Organisation/LeadPanel/Customer";
import Employee from "../../Component/Organisation/LeadPanel/Employee";
import Select from "../../Component/Common/Select";
import Data from "../../constants/leadpanel-data.json";
import Table from "../../Component/Organisation/LeadPanel/Table";
import Grid from "../../Component/Organisation/LeadPanel/Grid";
import UpdateLead from "../../Component/Organisation/LeadPanel/UpdateLead";

export default function LeadPanel() {
  const [view, setView] = useState("table");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const [updateLead, setUpdateLead] = useState(null);
  const [selectedLead, setSelectedLead] = useState(null);

  const sortOptions = [
    { value: null, label: "Sort by" },
    { value: "N-A2Z", label: "Name A-Z" },
    { value: "N-Z2A", label: "Name Z-A" },
    { value: "C-A2Z", label: "Company A-Z" },
    { value: "C-Z2A", label: "Company Z-A" },
    { value: "V-ASC", label: "Estimate Low to High" },
    { value: "V-DESC", label: "Estimate High to Low" },
  ];

  // Filter by search query
  let filteredData = Data.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Filter by active tab
  if (activeTab !== "All") {
    filteredData = filteredData.filter((item) => item.status === activeTab);
  }

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
        return (
          parseFloat(a.value.replace("$", "")) -
          parseFloat(b.value.replace("$", ""))
        );
      case "V-DESC":
        return (
          parseFloat(b.value.replace("$", "")) -
          parseFloat(a.value.replace("$", ""))
        );
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
          </div>
          <div className={styles.right}>
            <button>Share</button>
            <button>+ Add Employee</button>
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
              {["All", "Upcoming", "Follow Up", "Previous Lead"].map((tab) => (
                <span
                  key={tab}
                  className={activeTab === tab ? styles.activeTab : styles.tab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </span>
              ))}
            </div>
            <hr />
            <div className={styles.searchs}>
              <div className={styles.searchleft}>
                <input
                  placeholder="Search by Name, Email, or Company"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span>Import</span>
              </div>
              <div className={styles.searchright}>
                <div className={styles.view}>
                  <button
                    className={view === "table" ? styles.active : ""}
                    onClick={() => setView("table")}
                  >
                    List
                  </button>
                  <button
                    className={view === "grid" ? styles.active : ""}
                    onClick={() => setView("grid")}
                  >
                    Grid
                  </button>
                </div>
                <Select
                  options={sortOptions}
                  onChange={(e) => setSortBy(e.target.value)}
                />
              </div>
            </div>
          </div>
          {selectedLead && (
            <UpdateLead
              selectedLead={selectedLead}
              setUpdateLead={setSelectedLead}
            />
          )}

          <div className={styles.tablebody}>
            {view === "table" ? (
              <Table setSelectedLead={setSelectedLead} data={sortedData} />
            ) : (
              <Grid data={sortedData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

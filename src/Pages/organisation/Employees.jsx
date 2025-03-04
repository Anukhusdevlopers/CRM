import React, { useState } from "react";
import styles from "./Employees.module.css";
import Table from "../../Component/Organisation/Employees/Table";
import { generateEmployees } from "../../constants";
import OrganizationChart from "../../Component/Organisation/Employees/OrganisationChart";
import PopupForm from "../../Component/Organisation/Employees/PopupForm";

const Employees = () => {
  const [activeTab, setActiveTab] = useState("manage");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const allEmployees = React.useMemo(() => generateEmployees(), []);
  const maxEmployees = 40;
  const currentEmployees = allEmployees.length;
  const isMaxReached = currentEmployees >= maxEmployees;

  const filteredEmployees = allEmployees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEmployees.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  const getBadgeClass = (department) => {
    switch (department) {
      case "Design":
        return styles.designBadge;
      case "Development":
        return styles.developmentBadge;
      case "HR":
        return styles.hrBadge;
      case "PM":
        return styles.pmBadge;
      case "Business":
        return styles.businessBadge;
      default:
        return "";
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    buttons.push(
      <button
        key="prev"
        className={styles.paginationButton}
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
    );
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`${styles.paginationButton} ${
            currentPage === i ? styles.activePaginationButton : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    buttons.push(
      <button
        key="next"
        className={styles.paginationButton}
        onClick={() =>
          currentPage < totalPages && handlePageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    );
    return buttons;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div>
            <div className={styles.headerTitle}>
              Employee (Manage your Employees)
            </div>
            <div className={styles.headerSubtitle}>
              You have added {currentEmployees} employee out of {maxEmployees}{" "}
              employees
            </div>
          </div>
        </div>
        <button
          onClick={() => !isMaxReached && setShowPopup(true)}
          className={styles.addButton}
          disabled={isMaxReached}
        >
          + Add Employees
        </button>
      </div>

      <div className={styles.tabsContainer}>
        <div
          className={`${styles.tab} ${
            activeTab === "manage" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("manage")}
        >
          Manage Employees
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "organization" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("organization")}
        >
          Organization Chart
        </div>
      </div>

      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      {activeTab === "manage" ? (
        <>
          <div className={styles.searchFilterContainer}>
            <div className={styles.searchContainer}>
              <span className={styles.searchIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Table currentItems={currentItems} getBadgeClass={getBadgeClass} />

          {currentItems.length > 9 && (
            <div className={styles.pagination}>
              <div className={styles.paginationInfo}>
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, filteredEmployees.length)} of{" "}
                {filteredEmployees.length} employees
              </div>
              <div className={styles.paginationControls}>
                {renderPaginationButtons()}
              </div>
            </div>
          )}
        </>
      ) : (
        <OrganizationChart />
      )}
    </div>
  );
};

export default Employees;

import { Tree, TreeNode } from "react-organizational-chart";
import styles from "./OrganisationChart.module.css";
import { Pencil } from "lucide-react";
import { orgData } from "../../../constants";

const getTotalEmployees = (departments) => {
  return departments.reduce((total, dept) => total + dept.employees.length, 0);
};

const OrganizationChart = () => {
  const totalEmployees = getTotalEmployees(orgData.departments);
  const paddingLeftValue = `${122 * totalEmployees}px`;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Organization Chart</h1>
        <button className={styles.editButton}>
          <span className={styles.editIcon}>
            <Pencil size={16} />
          </span>
          Edit Organization
        </button>
      </div>

      <div className={styles.chartContainerContainer} >
      <div className={styles.chartContainer} style={{ paddingLeft: paddingLeftValue }}>
        <Tree
          lineWidth={"2px"}
          lineColor={"black"}
          lineBorderRadius={"10px"}
          label={
            <div className={styles.nodecontainer}>
              <div className={styles.node}>
                <img src={orgData.organization.avatar} alt="Org" />
                <div>
                  <p>{orgData.organization.name}</p>
                </div>
              </div>
            </div>
          }
        >
          {orgData.departments.map((dept, i) => (
            <TreeNode
              key={i}
              label={
                <div className={styles.nodecontainer}>
                  <div className={styles.node}>
                    <img src={dept.head.avatar} alt="Head" />
                    <div>
                      <p>{dept.head.title}</p>
                      <p>{dept.head.name}</p>
                    </div>
                  </div>
                </div>
              }
            >
              {dept.employees.map((emp, j) => (
                <TreeNode
                  key={j}
                  label={
                    <div className={styles.nodecontainer}>
                      <div className={styles.node}>
                        <img src={emp.avatar} alt="Employee" />
                        <div>
                          <p>{emp.title}</p>
                          <p>{emp.name}</p>
                        </div>
                      </div>
                    </div>
                  }
                />
              ))}
            </TreeNode>
          ))}
        </Tree>
      </div>
      </div>
    </div>
  );
};

export default OrganizationChart;

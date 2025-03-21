import React, { useEffect, useRef } from "react";
import styles from "./DetailsSidebar.module.css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Employees from "../../../constants/leadpanel-data.json";

import {
  Mail,
  Phone,
  User,
  Calendar,
  MapPin,
  GraduationCap,
  Landmark,
  BookOpenCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EmployeeDetailsSidebar({ setSidebar, sidebar }) {
  const sidebarRef = useRef(null);

  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleMessage = (employeeId) => {
    navigate(`/organisation/messages/${employeeId}`); // ✅ Navigate to messages
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSidebar]);

  return (
    <div className={styles.overlay}>
      <div className={styles.container} ref={sidebarRef}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.arrow}>
              <button onClick={() => setSidebar(prev => prev--)}>
                <ChevronLeft />
              </button>
            </div>
            <div className={styles.arrow}>
              <button onClick={() => setSidebar(prev => prev++)}>
                <ChevronRight  />
              </button>
            </div>
            {`${Employees[sidebar].id} out of ${Employees.length}`}
          </div>
          <div className={styles.right}>
            <button onClick={() => setSidebar(null)}>
              <X />
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className={styles.profile}>
          <div className={styles.image}></div>
          <div className={styles.details}>
            <div className={styles.top}>
              <h3>{Employees[sidebar].name}</h3>
              <button onClick={() => handleMessage(Employees[sidebar].id)} >Message</button>
            </div>
            <div className={styles.bottom}>
              <div>
                <span>Designation</span>
                <h4>{Employees[sidebar].company}</h4>
              </div>
              <div>
                <span>Joining Date</span>
                <h4>{Employees[sidebar].joiningDate}</h4>
              </div>
              <div>
                <div
                  className={`${styles.status} ${
                    Employees[sidebar].online ? styles.online : styles.offline
                  }`}
                >
                  <div className={styles.dot}></div>
                  {Employees[sidebar].online ? "Active" : "Offline"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Body with Profile Info */}
        <div className={styles.body}>
          {/* Personal Information */}
          <div className={styles.section}>
            <h2 className={styles.heading}>Personal Information</h2>
            <div className={styles.infoItem}>
              <Mail className={styles.icon} />
              <span className={styles.text}>
                Email : {Employees[sidebar].email}
              </span>
            </div>
            <div className={styles.infoItem}>
              <Phone className={styles.icon} />
              <span className={styles.text}>
                Phone : {Employees[sidebar].contact}
              </span>
            </div>
            <div className={styles.infoItem}>
              <User className={styles.icon} />
              <span className={styles.text}>
                Gender : {Employees[sidebar].gender}
              </span>
            </div>
            <div className={styles.infoItem}>
              <Calendar className={styles.icon} />
              <span className={styles.text}>
                Birthdate : {Employees[sidebar].birthday}
              </span>
            </div>
            <div className={styles.infoItem}>
              <MapPin className={styles.icon} />
              <span className={styles.text}>
                Address : {Employees[sidebar].address}
              </span>
            </div>
          </div>

          {/* Education Information */}
          <div className={styles.section}>
            <h2 className={styles.heading}>Education Information</h2>
            <div className={styles.infoItem}>
              <Landmark className={styles.icon} />
              <span className={styles.text}>
                University : {Employees[sidebar].university}
              </span>
            </div>
            <div className={styles.infoItem}>
              <GraduationCap className={styles.icon} />
              <span className={styles.text}>
                Qualification : {Employees[sidebar].qualification}
              </span>
            </div>
            <div className={styles.infoItem}>
              <BookOpenCheck className={styles.icon} />
              <span className={styles.text}>
                Year Graduation : {Employees[sidebar].yearGraduation}
              </span>
            </div>
            <div className={styles.infoItem}>
              <User className={styles.icon} />
              <span className={styles.text}>Referral : Not Provided</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

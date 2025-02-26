import React, { useState, useEffect, useRef } from "react";
import { Trash2, X } from "lucide-react";
import styles from "./Popup.module.css";
import Input from "../../Common/Input";
import Button from "../../Common/Button";

export default function Popup({ data, onDelete, onClose }) {
  const [search, setSearch] = useState("");
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popupCard} ref={popupRef} onClick={(e) => e.stopPropagation()}>
              <X className={styles.closeButton} onClick={onClose} />
        <div className={styles.popupHeader}>
          <div className={styles.searchContainer}>
            <Input
              placeholder={"Search"}
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Button
              text="+ Invite"
              style={{
                background: "#0A3B2C",
                color: "white",
                borderRadius: 6,
                padding: "8px 12px",
                cursor: "pointer",
              }}
              className={styles.inviteButton}
            />
          </div>
          <p className={styles.description}>Employee at Customer blah blah</p>
        </div>
        <hr />
        <div className={styles.popupBody}>
          <h3>Participants</h3>
          <div className={styles.participantsList}>
            {data
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item, index) => (
                <div key={index} className={styles.participantItem}>
                  <div className={styles.avatar}></div>
                  <div className={styles.name}>{item.name}</div>
                  <Trash2
                    className={styles.deleteIcon}
                    onClick={() => onDelete(item.id)}
                  />
                </div>
              ))}
          </div>
        </div>
        <hr />
        <div className={styles.popupFooter}>
          <span className={styles.copyLink}>Copy Link</span>
          <span className={styles.filterOption}>Filter</span>
        </div>
      </div>
    </div>
  );
}

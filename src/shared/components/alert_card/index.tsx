import React, { useState, useRef, useEffect } from "react";
import Sprite from "shared/ui/sprite";
import css from "./alert-card.module.scss";
import { CardContent } from "./card-content";

export const AlertCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const dummyAlerts = [
    'Taiko Announcements',
    'Alethia Updates', 
    'Ecosystem News',
    'Gwyneth Updates',
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={css.alertContainer}>
      <button
        ref={buttonRef}
        className={`${css.alertButton} ${isOpen ? css.active : ''}`}
        onClick={toggleDropdown}
        aria-label="Notifications"
      >
        <Sprite.Default icon={isOpen ? "bell-light-icon" : "bell-icon"} className={css.bell}/>
      </button>

      {isOpen && (
        <div 
          ref={dropdownRef}
          className={css.dropdown}
          style={{
            left: '50%'
          }}
        >
          <CardContent menuContent={false} />
        </div>
      )}
    </div>
  );
};
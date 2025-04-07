import React from "react";
import Sprite from "shared/ui/sprite";
import css from "../alert-card.module.scss";

interface Props {
  menuContent: boolean;
}

export const CardContent: React.FC<Props> = ({ menuContent }) => {

  const dummyAlerts = [
    'Taiko Announcements',
    'Ecosystem News',
    'Alethia Updates', 
    'Gwyneth Updates',
  ];

  return (
    <div className={css.dropdownContent}>
      <div className={`${css.dropdownHeader} ${menuContent ? '' : css.dropdownCardHeader}`}>
        <h3>Stay up to date with Taiko</h3>
      </div>

      <div className={css.alertsList}>
        {dummyAlerts.map((topic) => (
          <div key={topic} className={`${css.topicItem} ${menuContent ? '' : css.dropdownCard}`}>
            <Sprite.Default icon="alert:check-icon" className={css.checkIcon} />
            <span>{topic}</span>
          </div>
        ))}
      </div>

      <div className={`${css.dropdownButtonContainer} ${menuContent ? '' : css.dropdownCard}`} onClick={() => window.open('https://taiko.notifi.network', '_blank')}>
        <button className={css.dropdownButtonText}>Discover Notifications</button>
      </div>
    </div>
  );
};
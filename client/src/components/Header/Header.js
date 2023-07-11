import React from "react";
import "./Header.css";
import SearchIcon from "../../../src/assets/icons/search-icon.svg";
import NotificationIcon from "../../../src/assets/icons/notification-icon.svg";
import ProfileIcon from "../../../src/assets/icons/profile-icon.svg";

const Header = () => {
  const renderImageWrapper = (icon) => {
    return (
      <div>
        <img src={icon} alt="" height={24} width={24} />
      </div>
    );
  };
  return (
    <>
      <div className="header-container">
        <div className="header-left-wrapper">Workflows/editor/signup_v1</div>
        <div className="header-right-wrapper">
          {renderImageWrapper(SearchIcon)}
          {renderImageWrapper(NotificationIcon)}
          {renderImageWrapper(ProfileIcon)}
        </div>
      </div>
    </>
  );
};

export default Header;

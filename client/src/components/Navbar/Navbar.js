import React from "react";
import "./Navbar.css";
import HomeIcon from "../../../src/assets/icons/home-icon.svg";
import FormSelectIcon from "../../../src/assets/icons/form-select-icon.svg";
import TransitIcon from "../../../src/assets/icons/transit-icon.svg";
import AccountPlusIcon from "../../../src/assets/icons/account-plus-icon.svg";
import SettingsIcon from "../../../src/assets/icons/settings-icon.svg";
import InfoIcon from "../../../src/assets/icons/info-icon.svg";

const Navbar = () => {
  const renderImageWrapper = (icon) => {
    return (
      <div>
        <img src={icon} alt="" height={24} width={24} />
      </div>
    );
  };
  return (
    <>
      <div className="nav-bar-container">
        <div className="top-action-wrapper">
          {renderImageWrapper(HomeIcon)}
          {renderImageWrapper(TransitIcon)}
          {renderImageWrapper(FormSelectIcon)}
        </div>
        <div className="bottom-action-wrapper">
          {renderImageWrapper(AccountPlusIcon)}
          {renderImageWrapper(SettingsIcon)}
          {renderImageWrapper(InfoIcon)}
        </div>
      </div>
    </>
  );
};
export default Navbar;

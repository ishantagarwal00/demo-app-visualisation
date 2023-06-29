import React from 'react';
import './Navbar.css';
import HomeIcon from '../../../src/assets/icons/home-icon.svg';
import FormSelectIcon from '../../../src/assets/icons/form-select-icon.svg';
import TransitIcon from '../../../src/assets/icons/transit-icon.svg';
import AccountPlusIcon from '../../../src/assets/icons/account-plus-icon.svg';
import SettingsIcon from '../../../src/assets/icons/settings-icon.svg';
import InfoIcon from '../../../src/assets/icons/info-icon.svg';

const Navbar = () => {
    return(
        <>
        <div className='nav-bar-container'>
            <div className='top-action-wrapper'>
                <div>
                    <img src={HomeIcon} alt="" height={24} width={24} />
                </div>
                <div>
                    <img src={TransitIcon} alt="" height={24} width={24} />
                </div>
                <div>
                    <img src={FormSelectIcon} alt="" height={24} width={24} />
                </div>
            </div>
            <div className='bottom-action-wrapper'>
            <div>
                    <img src={AccountPlusIcon} alt="" height={24} width={24} />
                </div>
                <div>
                    <img src={SettingsIcon} alt="" height={24} width={24} />
                </div>
                <div>
                    <img src={InfoIcon} alt="" height={24} width={24} />
                </div>
            </div>
            </div>
        </>
    )
} 
export default Navbar;
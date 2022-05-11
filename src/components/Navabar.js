import React, { useState } from 'react'
import "./Navabar.css"
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Navabar() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => {
            window.onscroll = null;
        }
    }
    return (
        <div className={isScrolled ? 'nav scrolled' : "nav"}>
            <div className="left">
                <img className='logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
            </div>
            <div className="right">
                <SearchIcon className="icon" />
                <NotificationsIcon className="icon" />
                <img className='userlogo' src="https://ih0.redbubble.net/image.618410871.2644/flat,1000x1000,075,f.u2.jpg" alt="" />
                <div className="profile">
                    <ArrowDropDownIcon className="icon" />
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navabar
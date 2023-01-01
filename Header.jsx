import React from 'react'
import './Header.css'
import { AccessTime, HelpOutline, Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useStateValue } from "./StateProvider";


function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      {/* AVATAR for logged in user */}
      <div className="header__left">
        {/* <Avatar
          src="https://lh3.googleusercontent.com/ogw/ADGmqu8lUWMnvoLoYJmqkjIojCXMtNQxMeR_No7CeLM0=s83-c-mo"
          alt="user profile picture"
        /> */}
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user.displaName}
        />

        {/* TIME ICON */}
        <AccessTime/>
      </div>
      <div className="header__search">
        <input placeholder="Search item here" />
        <Search/>
      </div>
      {/* Search Icon */}

      <div className="header__right">
        {/* help icons */} <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
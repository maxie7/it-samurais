import React from 'react';
import Logo from './../../assets/img/logo.svg';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.app_header}>
      <img alt='logo' src={Logo} />

      <div className={classes.loginBlock}>
        { props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  )
}

export default Header;

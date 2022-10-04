import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile"> Profile </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs"> Messages </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users'> Users </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news'> News </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music'> Music </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings'> Settings </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/weatherForecast'> WeatherForecast </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/aboutPonies'> About Ponies </NavLink>
      </div>
      {/*<a href='https://vk.com' target = "blank">
    <button className={s.button}>
      vk.com
    </button>
    </a>
     <a href='https://ficbook.net/authors/861090'>
    <button className={s.button}>
      ficbook.net
    </button>
    </a>
     <a href='https://ponyfiction.org/accounts/20494/'>
    <button className={s.button}>
      ponyfiction.org
    </button>
    </a>*/}
    </nav>
  )
}

export default Navbar;
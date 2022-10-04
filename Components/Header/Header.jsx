import React from 'react';
import s from './Header.module.css';
import image from '../../media/headerImage.jpg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return <header className={s.header}>
    <div className={s.item}>
      <a href='/profile'>
        <img src={image} alt=""/>
      </a>
    </div>

    <div className={s.main_title}>
      FIM.com - social network for bronies and all who named themselves some similar!
      <div className={s.subscribe_corner}>
        Friendship is magic!
      </div>
    </div>

    <div className={s.log}>
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} ---
            <button onClick={props.logout}>
              Log Out
            </button>
          </div>
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </div>
  </header>
}

export default Header;
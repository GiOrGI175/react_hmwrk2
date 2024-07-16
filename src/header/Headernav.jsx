import React from 'react';
import style from './HeaderNav.module.scss';

const HeaderNav = () => {
  return (
    <nav className={style.HeaderNav}>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Projects</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;

import React, { useState } from 'react';
import style from './HeaderNav.module.scss';

const HeaderNav = ({ Islight }) => {
  const updateTxtClr = () => {
    return {
      color: Islight ? '#455174CC' : '#ffffffcc',
    };
  };

  return (
    <nav className={style.HeaderNav}>
      <ul>
        <li>
          <a href='#' style={updateTxtClr()}>
            Home
          </a>
        </li>
        <li>
          <a href='#' style={updateTxtClr()}>
            About
          </a>
        </li>
        <li>
          <a href='#' style={updateTxtClr()}>
            Services
          </a>
        </li>
        <li>
          <a href='#' style={updateTxtClr()}>
            Projects
          </a>
        </li>
        <li>
          <a href='#' style={updateTxtClr()}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;

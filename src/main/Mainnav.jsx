import React from 'react';
import style from './MainNav.module.scss';
import twiiter from '/twitter.svg';
import WhatsApp from '/WhatsApp.svg';
import facebook from '/facebook.svg';
import instagram from '/instagram.svg';
import inl from '/in.svg';

const MainNav = () => {
  return (
    <nav className={style.MainNav}>
      <ul>
        <li>
          <a href='https://x.com/' target='blank'>
            {' '}
            <img src={twiiter} alt='twiiter' />
          </a>
        </li>
        <li>
          <a href='https://web.whatsapp.com/' target='blank'>
            {' '}
            <img src={WhatsApp} alt='WhatsApp' />
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/?locale=ka_GE' target='blank'>
            {' '}
            <img src={facebook} alt='facebook' />
          </a>
        </li>

        <li>
          <a href='https://www.instagram.com/' target='blank'>
            {' '}
            <img src={instagram} alt='instagram' />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/' target='blank'>
            {' '}
            <img src={inl} alt='in' />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;

import React from 'react';
import style from './Header.module.scss';
import HeaderNav from './Headernav';
import sun from '/sun.svg';

const Header = () => {
  return (
    <header>
      <div className={style.header_container}>
        <div className={style.header_content}>
          <HeaderNav />
          <div className={style.ImgBox}>
            <img src={sun} alt='light Mode' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import style from './Header.module.scss';
import HeaderNav from './Headernav';
import sun from '/sun.svg';
import moon from '/moon.svg';

const Header = ({ islight }) => {
  const [Islight, setISlight] = useState(islight);

  function darkMode() {
    setISlight((perv) => !perv);
  }

  const updateBgClr = () => {
    return {
      backgroundColor: Islight ? '#DBDBDB' : '#222222',
    };
  };

  return (
    <header style={updateBgClr()}>
      <div className={style.header_container}>
        <div className={style.header_content}>
          <HeaderNav Islight={Islight} />
          <div className={style.ImgBox} onClick={darkMode}>
            <img src={Islight ? moon : sun} alt='light Mode' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

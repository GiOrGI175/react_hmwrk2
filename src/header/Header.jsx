import React from 'react';
import style from './Header.module.scss';
import HeaderNav from './Headernav';
import sun from '/sun.svg';
import moon from '/moon.svg';

const Header = ({ islight, setISlight }) => {
  console.log(`headeris ${islight}`);

  function darkMode() {
    setISlight((perv) => !perv);
  }

  const updateBgClr = () => {
    return {
      backgroundColor: islight ? '#DBDBDB' : '#222222',
      boxShadow: islight
        ? '0px 0px 10.05px 0px #0000001A'
        : '0px 0px 10.05px 0px #ffffff1a',
    };
  };

  return (
    <header style={updateBgClr()}>
      <div className={style.header_container}>
        <div className={style.header_content}>
          <HeaderNav Islight={islight} />
          <div className={style.ImgBox} onClick={darkMode}>
            <img src={islight ? moon : sun} alt='light Mode' />
          </div>
        </div>
      </div>
      <div className={style.underline}></div>
    </header>
  );
};

export default Header;

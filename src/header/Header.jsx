import React from 'react';
import style from './Header.module.scss';
import HeaderNav from './Headernav';
import sun from '/sun.svg';
import moon from '/moon.svg';

const Header = ({ islight }, { setISlight }, { darkMode }) => {
  console.log(islight);

  console.log(setISlight);

  // console.log(updateBgClr);

  // const [islight, setISlight] = useState(false);

  // const darkMode = () => {
  //   setISlight((perv) => !perv);
  // };

  const updateBgClr = () => {
    return {
      backgroundColor: islight ? '#DBDBDB' : '#222222',
    };
  };

  return (
    <header style={updateBgClr()}>
      <div className={style.header_container}>
        <div className={style.header_content}>
          <HeaderNav islight={islight} />
          <div className={style.ImgBox} onClick={darkMode}>
            <img src={islight ? moon : sun} alt='light Mode' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

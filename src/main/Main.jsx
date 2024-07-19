import React from 'react';
import style from './Main.module.scss';
import MainNav from './Mainnav';
import boy from '/boy.webp';

const Main = ({ islight, setISlight }) => {
  // console.log(`mainis ${islight}`);

  const updateBgClr = () => {
    return {
      backgroundColor: islight ? '#DBDBDB' : '#222222',
    };
  };

  return (
    <main style={updateBgClr()}>
      <div className={style.main_container}>
        <div className={style.main_content}>
          <div className={style.text_contnet}>
            <h1>
              <span>Hi, I am </span>Chukwukwe Chisom
            </h1>
            <p>Frontend Developer</p>
            <button>Download CV</button>
            <MainNav />
          </div>
          <div className={style.ImgBox}>
            <img src={boy} alt='boy' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

import React from 'react';
import style from './Languagesection.module.scss';
import javaScript from '/js.svg';
import react from '/React.svg';
import Angular from '/Angular.svg';
import vue from '/vue.svg';

const LanguageSection = ({ islight }) => {
  const updateBgClr = () => {
    return {
      backgroundColor: islight ? '#DBDBDB' : '#222222',
    };
  };

  const updatewidth = () => {
    return {
      height: islight ? '60px' : '91px',
    };
  };

  const updateposition = () => {
    return {
      top: islight ? '-110%' : '-40%',
      border: islight ? '1px solid #DBDBDB' : '8px solid #222222',
    };
  };

  return (
    <section style={updateBgClr()} className={style.section_1}>
      <div className={style.section_1_container}>
        <div className={style.section_1_content}>
          <nav className={style.LanguageNav}>
            <ul>
              <li style={updatewidth()}>
                <img
                  src={javaScript}
                  alt='javaScript'
                  style={updateposition()}
                />
                <a href='#'>Java Script</a>
              </li>
              <li style={updatewidth()}>
                <img src={react} alt='react' style={updateposition()} />
                <a href='#'>React</a>
              </li>
              <li style={updatewidth()}>
                <img src={Angular} alt='Angular' style={updateposition()} />
                <a href='#'>Angular js</a>
              </li>
              <li style={updatewidth()}>
                <img src={vue} alt='vue' style={updateposition()} />
                <a href='#'>vue js</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;

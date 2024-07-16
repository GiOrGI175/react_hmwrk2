import React from 'react';
import style from './Languagesection.module.scss';
import javaScript from '/js.svg';
import react from '/React.svg';
import Angular from '/Angular.svg';
import vue from '/vue.svg';

const LanguageSection = () => {
  return (
    <section className={style.section_1}>
      <div className={style.section_1_container}>
        <div className={style.section_1_content}>
          <nav className={style.LanguageNav}>
            <ul>
              <li>
                <img src={javaScript} alt='javaScript' />
                <a href='#'>Java Script</a>
              </li>
              <li>
                <img src={react} alt='react' />
                <a href='#'>React</a>
              </li>
              <li>
                <img src={Angular} alt='Angular' />
                <a href='#'>Angular js</a>
              </li>

              <li>
                <img src={vue} alt='vue' />
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

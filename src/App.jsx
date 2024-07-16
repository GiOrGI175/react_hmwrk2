import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import LanguageSection from './section/Languagesection';

const App = () => {
  const [islight, setISlight] = useState(false);

  function darkMode() {
    setISlight((perv) => !perv);
  }

  //   const updateBgClr = () => {
  //     return {
  //       backgroundColor: islight ? '#DBDBDB' : '#222222',
  //     };
  //   };
  return (
    <>
      <Header
        islight={islight}
        setISlight={setISlight}
        darkMode={darkMode}
        // updateBgClr={updateBgClr()}
      />
      <Main />
      <LanguageSection />
    </>
  );
};

export default App;

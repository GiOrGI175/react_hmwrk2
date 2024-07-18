import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import LanguageSection from './section/Languagesection';

const App = () => {
  const [islight, setISlight] = useState(false);

  return (
    <>
      <Header islight={islight} />
      <Main />
      <LanguageSection />
    </>
  );
};

export default App;

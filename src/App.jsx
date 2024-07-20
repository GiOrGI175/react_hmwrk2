import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import LanguageSection from './section/Languagesection';

const App = () => {
  const [islight, setISlight] = useState(true);

  console.log(`appis ${islight}`);

  return (
    <>
      <Header islight={islight} setISlight={setISlight} />
      <Main islight={islight} setISlight={setISlight} />
      <LanguageSection islight={islight} />
    </>
  );
};

export default App;

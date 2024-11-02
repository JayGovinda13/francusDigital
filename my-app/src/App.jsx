import React from "react"; 
import "./App.css";
import Header from "./components/Header/Header";
import { useTranslation } from 'react-i18next'; 
import Main from "./components/Main/Main";

function App() {
  const { t } = useTranslation(); 

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;

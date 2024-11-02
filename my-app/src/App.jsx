import React from "react"; // Não esqueça de importar React
import "./App.css";
import Header from "./components/Header/Header";
import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Importando hook useTranslation

function App() {
  const { t } = useTranslation(); // Usando o hook para traduções

  return (
    <>
      <Header />
      <Container sx={{ padding: '2rem', textAlign: 'center', backgroundColor: '#3279ba',width: '100%' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('welcome')} 
        </Typography>
        <Typography variant="body1">
          {t('mainContent')}
        </Typography>
      </Container>
    </>
  );
}

export default App;

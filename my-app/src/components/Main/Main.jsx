import React from "react";
import { Button, Container, Box, ImageListItem, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import DoneIcon from '@mui/icons-material/Done';
import { blueGrey, yellow } from "@mui/material/colors";

function Main() {
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Coluna em telas pequenas, linha em telas maiores
        backgroundColor: "#003366", // Fundo azul escuro
        color: "#fff", // Texto branco
        minHeight: "100vh", // Ocupa toda a tela
        padding: "1rem",
        fontFamily: 'Lexend, sans-serif', // Define a fonte Lexend
      }}
    >
      <Box
        sx={{
          marginTop:"14rem",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "flex-start", // Alinhamento ao topo
          alignItems: "flex-start", // Alinhamento à esquerda
          textAlign: "left", // Texto alinhado à esquerda
          padding: "1rem",
          width: { xs: '100%', sm: '40%' }, // Usar 100% para telas pequenas e 50% para maiores
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          <span style={{ fontWeight: "bold" }}>{t("main.welcomeBold")}</span>{" "}
          {t("main.welcomeText")}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {t("main.mainContent")}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F7F5F0", // Cor de fundo personalizada
            color: "#003366", // Cor do texto personalizada
            display: "flex", // Permite alinhamento em linha
            alignItems: "center", // Centraliza verticalmente o texto e o ícone
            "&:hover": {
              backgroundColor: "#E0E0E0", // Cor de fundo ao passar o mouse
            },
          }}
        >
          {t("main.mainButton")}
          <DoneIcon sx={{ color: blueGrey[700], marginLeft: "0.5rem" }} />
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          width: { xs: '100%', sm: '50%' }, // Usar 100% para telas pequenas e 50% para maiores
        }}
      >
        <ImageListItem>
          <img src="/img/fotoTeste.webp" alt="Teste" style={{ width: '100%', height: 'auto' }} />
        </ImageListItem>
      </Box>
    </Container>
  );
}

export default Main;

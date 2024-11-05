// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Button,
  Box,
  ImageListItem,
  Typography,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupIcon from "@mui/icons-material/Group";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { blueGrey } from "@mui/material/colors";

function Main() {
  const { t } = useTranslation();

  return (
    <body
      
    >
      {/* Seção de Boas-vindas */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        {/* Conteúdo de texto */}
        <Box
          sx={{
            paddingLeft: { xs: "20rem", sm: "16rem" },
            color: "#3279ba",
            marginTop: "15rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            textAlign: "left",
            width: { xs: "100%", sm: "40%" },
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            <span style={{ fontWeight: "bold" }}>{t("main.welcomeBold")}</span>{" "}
            {t("main.welcomeText")}
          </Typography>
          <Typography variant="body1" component="h2" sx={{ mb: 4 }}>
            {t("main.mainContent")}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3279ba",
              color: "#F7F5F0",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#1e4a73",
              },
            }}
          >
            {t("main.mainButton")}
            <DoneIcon sx={{ color: blueGrey[700], marginLeft: "0.5rem" }} />
          </Button>
        </Box>

        {/* Imagem */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            width: { xs: "100%", sm: "50%" },
          }}
        >
          <ImageListItem>
            <img
              src="/img/fotoTeste.webp"
              alt="Teste"
              style={{ width: "100%", height: "auto" }}
            />
          </ImageListItem>
        </Box>
      </Box>

      {/* Seção dos Pilares */}
      <Box
        sx={{
          color: "#3279ba",
          padding: "3rem 1.5rem",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "400", marginBottom: "1rem" }}
        >
          {t("main.pillarsIntro")}{" "}
          <Typography component="span" variant="h5" sx={{ fontWeight: "700" }}>
            {t("main.pillarsHighlight")}
          </Typography>{" "}
          {t("main.pillarsEnd")}
        </Typography>

        <Divider
          sx={{
            borderStyle: "dashed",
            borderColor: "#3279ba",
            marginBottom: "2rem",
            width: "100%",
          }}
        />

        {/* Contêiner dos pilares */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          {/* Pilar 1 */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ width: { xs: "100%", sm: "20%" } }}
          >
            <EditIcon sx={{ fontSize: "3rem", color: "#3279ba" }} />
            <Typography variant="subtitle1" sx={{ marginTop: "0.5rem" }}>
              {t("main.plannig")}
            </Typography>
          </Box>

          {/* Pilar 2 */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ width: { xs: "100%", sm: "20%" } }}
          >
            <SearchIcon sx={{ fontSize: "3rem", color: "#3279ba" }} />
            <Typography variant="subtitle1" sx={{ marginTop: "0.5rem" }}>
              {t("main.organization")}
            </Typography>
          </Box>

          {/* Pilar 3 */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ width: { xs: "100%", sm: "20%" } }}
          >
            <AssessmentIcon sx={{ fontSize: "3rem", color: "#3279ba" }} />
            <Typography variant="subtitle1" sx={{ marginTop: "0.5rem" }}>
              {t("main.performance")}
            </Typography>
          </Box>

          {/* Pilar 4 */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ width: { xs: "100%", sm: "20%" } }}
          >
            <GroupIcon sx={{ fontSize: "3rem", color: "#3279ba" }} />
            <Typography variant="subtitle1" sx={{ marginTop: "0.5rem" }}>
              {t("main.relationship")}
            </Typography>
          </Box>

          {/* Pilar 5 */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ width: { xs: "100%", sm: "20%" } }}
          >
            <CheckCircleIcon sx={{ fontSize: "3rem", color: "#3279ba" }} />
            <Typography variant="subtitle1" sx={{ marginTop: "0.5rem" }}>
              {t("main.result")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </body>
  );
}

export default Main;

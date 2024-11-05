import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const pages = ["solutions", "cases", "aboutUs", "customerSupport"];

function Header() {
  const { t, i18n } = useTranslation();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    handleCloseUserMenu();
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseUserMenu}
          sx={{
            color: "#3279ba",
            width: "100%",
            justifyContent: "flex-start",
            fontFamily: "Lexend",
            fontWeight: "bold",
          }}
        >
          {t(`header.${page}`)}
        </Button>
      ))}
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{ width: "100%", backgroundColor: "#F7F5F0" }}
    >
      <Toolbar
        disableGutters
        sx={{ justifyContent: "space-between", padding: "0.25rem 0" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link >
            <img
              src="/img/logoFrancus2.png"
              alt="Logo"
              className="logo"
              style={{ height: "3em" }}
            />
          </Link>
        </Box>

        {/* Menu Hamburger para telas menores */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ color: "#3279ba" }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerList()}
          </Drawer>
        </Box>

        {/* Botões de navegação para telas maiores */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseUserMenu}
              sx={{
                color: "#3279ba",
                mx: 2,
                fontFamily: "Lexend",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              {t(`header.${page}`)}
            </Button>
          ))}
        </Box>

        {/* Botões de seleção de idioma */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginRight: "1rem",
          }}
        >
          <Tooltip title="Choose Language">
            <Box sx={{ display: "flex", gap: 1 }}>
              {["pt", "es", "en"].map((lang) => (
                <Typography
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  sx={{
                    cursor: "pointer",
                    color: "#3279ba",
                    fontFamily: "Lexend",
                    fontWeight: "bold",
                    fontSize: { xs: "1.5rem", md: "2.5rem" },
                  }}
                >
                  {lang === "pt" ? "🇧🇷" : lang === "es" ? "🇪🇸" : "🇬🇧"}
                </Typography>
              ))}
            </Box>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          ></Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

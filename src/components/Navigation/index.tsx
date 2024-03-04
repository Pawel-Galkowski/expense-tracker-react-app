import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Divider,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import MobileNavigation from "./MobileNavigation";
import { useTranslation } from "react-i18next";
import { Adb as AdbIcon, Menu as MenuIcon } from "@mui/icons-material";
import { LanguagesDropdown } from "./LanguagesDropdown";

export const pages = [
  "Main",
  "History",
  "Categorize",
  "Transactions",
  "Incomes",
  "Reports and analyze",
  "Settings",
];

const colorMenuItems = '#fff'

export const Navigation: React.FC = () => {
  // const theme = useTheme();
  const { t } = useTranslation();
  const [mobileNavOpen, isMobileNavOpen] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const onMobileNavChange = useCallback((state: boolean) => {
    isMobileNavOpen(state);
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav>
      <MobileNavigation isOpen={mobileNavOpen} onChange={onMobileNavChange} />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => isMobileNavOpen(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <LanguagesDropdown />
            <Divider orientation="vertical" flexItem sx={{ margin: '4px 0 4px 5px', borderColor: colorMenuItems }} />
            <Box sx={{ flexGrow: 0, marginLeft: '12px' }}>
              <Tooltip title="Auth">
                {isLogged ? (
                  <Button onClick={() => setIsLogged(false)} sx={{ p: 0, color: colorMenuItems }}>
                    {t("Log Out")}
                  </Button>
                ) : (
                  <Button onClick={() => setIsLogged(true)} sx={{ p: 0, color: colorMenuItems }}>
                    {t("Log In")}
                  </Button>
                )}
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
};

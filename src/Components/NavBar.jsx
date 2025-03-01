import * as React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = [
  { title: "Home", path: "/", icon: <HomeIcon sx={{ mr: 1 }} /> },
  { title: "About", path: "/about", icon: <InfoIcon sx={{ mr: 1 }} /> },
  { title: "Shop", path: "/shop", icon: <ShoppingCartIcon sx={{ mr: 1 }} /> },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={4}
      sx={{
        background: "linear-gradient(135deg, #5a0c4a, #b13579)",
        borderRadius: "12px",
        p: 1.5,
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logo1.png"
              alt="logo"
              style={{
                height: "60px",
                width: "60px",
                objectFit: "contain",
                borderRadius: "10px",
                boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#fff" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: "#5a0c4a",
                  borderRadius: "10px",
                },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem component={Link} to={page.path} key={index} onClick={handleCloseNavMenu} sx={{ color: "#fff" }}>
                  {page.icon}
                  <Typography sx={{ ml: 1 }}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end", gap: 3 }}>
            {pages.map((page, index) => (
              <Button
                component={Link}
                to={page.path}
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "16px",
                  textTransform: "none",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  px: 3,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                    transform: "scale(1.05)",
                  },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {page.icon}
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;

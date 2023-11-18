import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { CartWidget } from "./CartWidget";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [categorys, setCategorys] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategorys(json));
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (category) => {
    setAnchorEl(null);
    navigate(`/category/${category}`);
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
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
              NFL Shop
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => navigate("/")}
              >
                Inicio
              </Button>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={handleMenu}
              >
                Categorías
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {categorys.map((item, idx) => (
                  <MenuItem key={idx} onClick={() => handleClose(item)}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <CartWidget />
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
};

import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../assets/logo-sizzle.png";

const navItems = ["Home", "Menu", "About", "Contact"];

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseMenu = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          color: "#111827",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <Toolbar
          disableGutters
          className="mx-auto w-full max-w-7xl justify-between px-4 sm:px-6 lg:px-8"
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={logo} alt="BiteSizzle Logo" className="h-8 w-8" />
            <Typography
              variant="h5"
              sx={{ fontFamily: "var(--font-display)", fontWeight: "500" }}
            >
              BiteSizzle
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Button key={item} color="inherit">
                {item}
              </Button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <IconButton aria-label="Shopping cart" color="inherit">
              <ShoppingCartOutlinedIcon />
            </IconButton>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <IconButton
                aria-label="Open navigation menu"
                color="inherit"
                onClick={handleOpenMenu}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleCloseMenu}>
        <div className="w-72 p-4">
          <div className="mb-4 flex items-center justify-between">
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              BiteSizzle
            </Typography>

            <IconButton
              aria-label="Close navigation menu"
              onClick={handleCloseMenu}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <Divider />

          <List>
            {navItems.map((item) => (
              <ListItemButton key={item} onClick={handleCloseMenu}>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;

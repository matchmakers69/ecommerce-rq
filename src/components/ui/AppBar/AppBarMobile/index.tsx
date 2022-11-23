import { useNavigate, NavLink as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import constants from "../../../../constants";
import { useState, MouseEvent } from "react";
import AppBarContainer from "components/ui/AppBarContainer";
import Logo from "components/ui/Logo";

const AppBarMobile = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path: string) => {
    setAnchorElNav(null);
    if (path) {
      navigate(path);
    }
  };
  return (
    <AppBarContainer>
      <Logo />
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
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
        <Button disableRipple component={RouterLink} to={constants.routes.HOME}>
          Home
        </Button>
        <Button disableRipple component={RouterLink} to="/">
          Categories
        </Button>

        <Button
          disableRipple
          component={RouterLink}
          to={constants.routes.PRODUCTS}
        >
          Online store
        </Button>
      </Menu>
    </AppBarContainer>
  );
};

export default AppBarMobile;

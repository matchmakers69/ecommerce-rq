import * as S from "./ActionMenu.styled";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBarList from "../AppBarList";
import { CartContext } from "context/CartContext";
import { useContext } from "react";

type ActionsMenuProps = {
  matches?: boolean;
};

const ActionsMenu = ({ matches }: ActionsMenuProps) => {
  const theme = useTheme();
  const { handleToggleOpenCartSidebar } = useContext(CartContext);
  const Component = matches
    ? S.ActionIconsContainerMobile
    : S.ActionIconsContainerDesktop;
  return (
    <Component>
      <AppBarList type="row">
        <ListItemButton
          onClick={handleToggleOpenCartSidebar}
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: theme.colors.secondary.light,
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: theme.colors.secondary.light,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: theme.colors.secondary.light,
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </AppBarList>
    </Component>
  );
};

export default ActionsMenu;

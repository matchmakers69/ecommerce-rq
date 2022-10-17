import { useContext } from "react";

import {
  Box,
  Drawer,
  styled,
  Divider,
  useTheme,
  Button,
  darken,
  Typography,
} from "@mui/material";

import { SidebarContext } from "context/SidebarContext";
import Scrollbar from "components/ui/Scrollbar";
import { CartContext } from "context/CartContext";
import Cart from "../Cart";

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
       color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);

const SidebarCart = () => {
  const { cartToggle, handleToggleOpenCartSidebar } = useContext(CartContext);
  const closeCartSidebar = () => handleToggleOpenCartSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: !cartToggle ? "none" : "inline-block",
          },
          position: "fixed",
          left: 0,
          top: 0,
          background:
            theme.palette.mode === "dark"
              ? theme.sidebar.background
              : darken(theme.colors.alpha.black[100], 0.5),
          boxShadow:
            theme.palette.mode === "dark" ? theme.sidebar.boxShadow : "none",
        }}
      >
        <Scrollbar>
          <Box mt={3}>
            <Box
              mx={2}
              sx={{
                width: 52,
              }}
            ></Box>
          </Box>
          <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.colors.alpha.white[10],
            }}
          />
          {<div>feswrvgdrfes</div>}
        </Scrollbar>
        <Divider
          sx={{
            background: theme.colors.alpha.white[10],
          }}
        />
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
        }}
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={cartToggle}
        onClose={closeCartSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background: theme.palette.mode === "dark" && theme.colors.primary,
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Box mx={2}>
                <Typography variant="h2">Cart</Typography>
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.secondary.lighter,
              }}
            />
            <Cart />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  );
};

export default SidebarCart;

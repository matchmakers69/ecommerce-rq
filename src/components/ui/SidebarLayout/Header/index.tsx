import {
  alpha,
  Box,
  Divider,
  IconButton,
  lighten,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import * as S from "./Header.styled";
import { SidebarContext } from "context/SidebarContext";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { FC, ReactElement, useContext } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderMenuUsers from "./HeaderMenuUsers";
import BasketMenu from "./BasketMenu";
import { usePageType } from "hooks/usePageType";

const Header = () => {
  const { sidebarToggle, toggleSidebar, pageType } = useContext(SidebarContext);
  const { HeaderMenuComponent } = usePageType(pageType);

  const theme = useTheme();
  return (
    <S.HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === "dark"
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1
              )}`,
      }}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      >
        {pageType && <HeaderMenuComponent />}
      </Stack>
      <Box display="flex" alignItems="center">
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: "none", xs: "inline-block" },
          }}
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </S.HeaderWrapper>
  );
};

export default Header;

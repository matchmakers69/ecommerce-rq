import { Box, styled } from "@mui/material";

export const SidebarLayoutWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  height: "100%",

  ".MuiPageTitle-wrapper": {
    background:
      theme.palette.mode === "dark"
        ? theme.colors.alpha.white[5]
        : theme.colors.alpha.white[50],
    marginBottom: theme.spacing(4),
  },
}));

export const SidebarWrapperInner = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 5,
  display: "block",
  flex: 1,
  paddingTop: theme.header.height,
  [theme.breakpoints.up("lg")]: {
    marginLeft: theme.sidebar.width,
  },
}));

import { Box, alpha } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  height: theme.header.height,
  color: theme.header.textColor,
  padding: theme.spacing(0, 2),
  right: 0,
  zIndex: 6,
  backgroundColor: alpha(theme.header.background, 0.95),
  position: "fixed",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.up("lg")]: {
    left: theme.sidebar.width,
    width: "auto",
  },
}));

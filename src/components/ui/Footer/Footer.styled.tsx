import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const Footer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  color: theme.footer.textColor,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  background: theme.footer.background,
}));

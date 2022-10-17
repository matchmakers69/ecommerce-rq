import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
  justifyContent: "flex-end",
}));

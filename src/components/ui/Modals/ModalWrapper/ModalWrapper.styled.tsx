import { styled } from "@mui/system";
import { IconButton, Box } from "@mui/material";

export const ModalHeader = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "end",
  justifyContent: "space-between",
  paddingBottom: 8,
  borderBottom: theme.header.textColor,
}));

export const CloseModalButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 0,
  display: "flex",
  alignItems: "center",
  color: theme.colors.secondary.main,
}));

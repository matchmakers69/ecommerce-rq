import { Box, styled } from "@mui/material";
import { shouldForwardProp } from "@mui/system";
import { StyledProps } from ".";

export const AppBarList = styled(Box, {
  shouldForwardProp: (prop: PropertyKey) =>
    shouldForwardProp(prop) && prop !== "type",
})<StyledProps>(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

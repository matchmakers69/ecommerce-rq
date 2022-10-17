import { SnackbarContent as SnackbarContentNotistack } from "notistack";
import { IconButton, styled } from "@mui/material";
import { StyledProps } from ".";

export const SnackbarContainer = styled(SnackbarContentNotistack)(
  ({ theme }) => ({
    minWidth: 300,
    height: 56,
    maxWidth: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 588,
    },
    [theme.breakpoints.up("md")]: {
      width: 896,
    },

    [theme.breakpoints.up("lg")]: {
      width: 1152,
    },

    [theme.breakpoints.up("xl")]: {
      width: 1520,
    },
  })
);

export const SnackbarContentBcg = styled("div", {
  shouldForwardProp: (prop: PropertyKey) => prop !== "variant",
})<StyledProps>(({ variant, theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  padding: "0 15px 0 30px",
  margin: "0 auto",
  borderRadius: 6,
  boxShadow: `0 3px 12px rgba(0,0,0, 0.2)`,
  color: theme.colors.alpha.black[100],

  ...(variant === "success" && {
    backgroundColor: theme.colors.success.light,
  }),

  ...(variant === "warning" && {
    backgroundColor: theme.colors.warning.light,
  }),

  ...(variant === "error" && {
    backgroundColor: theme.colors.error.light,
  }),
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 0,
  display: "flex",
  alignItems: "center",
  color: theme.colors.alpha.black[100],
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

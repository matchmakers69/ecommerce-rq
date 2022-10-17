import { styled } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";

export const LogoLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  position: "relative",
  display: "flex",
  fontSize: 3,
  textTransform: "uppercase",

  "&:after": {
    content: "''",
    position: "absolute",
    left: 0,
    bottom: -4,
    width: "100%",
    height: 4,
    backgroundColor: theme.colors.secondary.main,
  },
}));

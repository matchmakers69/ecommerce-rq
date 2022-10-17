import MuiAppBar from "@mui/material/AppBar";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AppBarMobile from "./AppBarMobile";
import AppBarDesktop from "./AppBarDesktop";

const AppBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <MuiAppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {matches ? <AppBarMobile /> : <AppBarDesktop matches={matches} />}
          </Toolbar>
        </Container>
      </MuiAppBar>
    </>
  );
};

export default AppBar;

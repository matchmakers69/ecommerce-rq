import Button from "@mui/material/Button";
import constants from "../../../../constants";
import { NavLink as RouterLink } from "react-router-dom";

import Logo from "components/ui/Logo";
import AppBarList from "components/ui/AppBarList";
import AppBarContainer from "components/ui/AppBarContainer";
import ActionsMenu from "components/ui/ActionsMenu";

type AppBarDesktopProps = {
  matches?: boolean;
};

const AppBarDesktop = ({ matches }: AppBarDesktopProps) => {
  return (
    <AppBarContainer>
      <Logo />

      <AppBarList type="row">
        <Button disableRipple component={RouterLink} to={constants.routes.HOME}>
          Home
        </Button>
        <Button disableRipple component={RouterLink} to="/">
          Categories
        </Button>
        <Button
          disableRipple
          component={RouterLink}
          to={constants.routes.PRODUCTS}
        >
          Online store
        </Button>
      </AppBarList>
      <ActionsMenu matches={matches} />
    </AppBarContainer>
  );
};

export default AppBarDesktop;

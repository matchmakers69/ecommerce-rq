import {
  Box,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import constants from "../../../../../constants";
import { styled, useTheme } from "@mui/material/styles";
import ActionsMenu from "components/ui/ActionsMenu";

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(["color", "fill"])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

const HeaderMenu = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ListWrapper
      sx={{
        display: {
          xs: "none",
          md: "flex",
          alignItems: "center",
        },
      }}
    >
      <List disablePadding component={Box} display="flex">
        <ListItem
          classes={{ root: "MuiListItem-indicators" }}
          button
          component={NavLink}
          to={constants.routes.HOME}
        >
          <ListItemText
            primaryTypographyProps={{ noWrap: true }}
            primary="Home"
          />
        </ListItem>
        <ListItem
          classes={{ root: "MuiListItem-indicators" }}
          button
          component={NavLink}
          to={constants.routes.PRODUCTS}
        >
          <ListItemText
            primaryTypographyProps={{ noWrap: true }}
            primary="Shop"
          />
        </ListItem>
      </List>
      <ActionsMenu matches={matches} />
    </ListWrapper>
  );
};

export default HeaderMenu;

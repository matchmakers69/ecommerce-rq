import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useRef, useState } from "react";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import constants from "../../../../../constants";

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

function HeaderMenuUsers() {
  return (
    <>
      <ListWrapper
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{ root: "MuiListItem-indicators" }}
            button
            component={NavLink}
            to={constants.routes.SPAGHETTIUSERS}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Users spaghetti code"
            />
          </ListItem>
          <ListItem
            classes={{ root: "MuiListItem-indicators" }}
            button
            component={NavLink}
            to={constants.routes.USEFETCHUSERS}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Users custom use fetch"
            />
          </ListItem>

          <ListItem
            classes={{ root: "MuiListItem-indicators" }}
            button
            component={NavLink}
            to={constants.routes.RQUSEQUERYUSERS}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Fetch users with RQ"
            />
          </ListItem>
        </List>
      </ListWrapper>
    </>
  );
}

export default HeaderMenuUsers;

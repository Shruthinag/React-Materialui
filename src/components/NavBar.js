import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

import { IconButton } from "@material-ui/core";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const NavBar = ({ cartTotal, onClick }) => {
  return (
    <div>
      <AppBar>
        <ToolBar>
          <Typography variant="h5" color="inherit">
            Vivek Agro Foods
          </Typography>
          <IconButton
            style={{
              color: "yellow",
              position: "absolute",
              right: 3,
            }}
            onClick={onClick}
          >
            <StyledBadge badgeContent={cartTotal} color="secondary">
              <AddShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </ToolBar>
      </AppBar>
    </div>
  );
};
export default NavBar;

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function Header({ user }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Bhookha
        </Typography>
        {user ? (
          <>
            <IconButton component={RouterLink} to="/cart" color="inherit">
              <Badge badgeContent={user.cart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Button component={RouterLink} to="/profile" color="inherit">
              Profile
            </Button>
          </>
        ) : (
          <Button component={RouterLink} to="/signin" color="inherit">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal,
  Backdrop,
  Fade,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: 500,
    width: '90%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  closeButton: {
    marginLeft: theme.spacing(2),
  },
  emptyCart: {
    textAlign: 'center',
  },
  listItem: {
    paddingRight: theme.spacing(8),
  },
  total: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2),
  },
  checkoutButton: {
    marginTop: theme.spacing(2),
  },
}));

function Cart({ user, onClose }) {
  const classes = useStyles();
  const [total, setTotal] = useState(0);

  const handleClose = () => {
    onClose();
  };

  const handleCheckout = () => {
    // Handle checkout logic here
    onClose();
  };

  const calculateTotal = () => {
    let total = 0;
    user.cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  };

  return (
    <Modal
      className={classes.modal}
      open={Boolean(user)}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={Boolean(user)}>
        <div className={classes.paper}>
          <div className={classes.header}>
            <Typography variant="h6">Shopping Cart</Typography>
            <IconButton className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          {user.cart.length > 0 ? (
            <>
              <List>
                {user.cart.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemAvatar>
                      <Avatar alt={item.name} src={item.image} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.name}
                      secondary={`Quantity: ${item.quantity}`}
                      className={classes.listItem}
                    />
                    <Typography>{`$${item.price * item.quantity}`}</Typography>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <div className={classes.total}>
                <Typography variant="h6">{`Total: $${total}`}</Typography>
              </div>
              <Button
                className={classes.checkoutButton}
                variant="contained"
                color="primary"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </>
          ) : (
            <Typography className={classes.emptyCart}>
              Your shopping cart is empty.
            </Typography>
          )}
        </div>
      </Fade>
    </Modal>
  );
}

export default Cart;

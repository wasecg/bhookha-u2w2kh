import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import { addToCart } from '../redux/actions/cartActions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 'auto',
  },
  media: {
    height: 140,
  },
  description: {
    marginTop: theme.spacing(2),
  },
  price: {
    fontWeight: 'bold',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function FoodItem({ foodItem, addToCart }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(foodItem);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            className={classes.media}
            image={foodItem.image}
            title={foodItem.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {foodItem.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {foodItem.description}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.price}
            >
              ${foodItem.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
              {foodItem.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}
            >
              {foodItem.description}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.price}
            >
              ${foodItem.price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (foodItem) => dispatch(addToCart(foodItem)),
  };
};

export default connect(null, mapDispatchToProps)(FoodItem);

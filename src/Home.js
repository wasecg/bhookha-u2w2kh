import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { fetchFoodItems } from './redux/actions/foodActions';
import FoodItem from './components/FoodItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(4),
  },
}));

function Home({ foodItems, fetchFoodItems }) {
  const classes = useStyles();

  useEffect(() => {
    fetchFoodItems();
  }, [fetchFoodItems]);

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        Welcome to Bhookha!
      </Typography>
      <Grid container spacing={3}>
        {foodItems.map((foodItem) => (
          <Grid item xs={12} sm={6} md={4} key={foodItem.id}>
            <FoodItem foodItem={foodItem} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    foodItems: state.foodItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFoodItems: () => dispatch(fetchFoodItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

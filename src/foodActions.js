import { firestore } from '../../firebase/firebase';

export const FETCH_FOOD_ITEMS_SUCCESS = 'FETCH_FOOD_ITEMS_SUCCESS';
export const FETCH_FOOD_ITEMS_FAILURE = 'FETCH_FOOD_ITEMS_FAILURE';

export const fetchFoodItems = () => {
  return async (dispatch) => {
    try {
      const foodItemsRef = firestore.collection('foodItems');
      const snapshot = await foodItemsRef.get();
      const foodItems = snapshot.docs.map((doc) => doc.data());
      dispatch({ type: FETCH_FOOD_ITEMS_SUCCESS, payload: foodItems });
    } catch (error) {
      dispatch({ type: FETCH_FOOD_ITEMS_FAILURE, payload: error.message });
    }
  };
};

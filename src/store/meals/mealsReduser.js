import { fetchApi } from "../../lib/fetchApi";

export const mealseActionTypes = {
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILED: "GET_MEALS_FAILED",
};

const initialState = {
  meals: [],
  isLoading: false,
  error: "",
};

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case mealseActionTypes.GET_MEALS_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case mealseActionTypes.GET_MEALS_SUCCESS:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
        error: "",
      };

    case mealseActionTypes.GET_MEALS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getMeals = () => async (dispatch) => {
    try {
      dispatch({ type: mealseActionTypes.GET_MEALS_STARTED });

      const { data } = await fetchApi("foods");
      dispatch({ type: mealseActionTypes.GET_MEALS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: mealseActionTypes.GET_MEALS_FAILED,
        payload: "Something went wrong",
      });
    }
  };


import { fetchApi } from "../../lib/fetchApi";

export const basketActionTypes = {
  ADD_ITEM_SUCCESS: "ADD_ITEM_SUCCESS",
  GET_BASKET_SUCCESS: "GET_BASKET_SUCCESS",
};

const initialState = {
  items: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case basketActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export const getBasket = () => async (dispatch) => {
  try {
    const { data } = await fetchApi("basket");

    dispatch({
      type: basketActionTypes.GET_BASKET_SUCCESS,
      payload: data.items,
    });
  } catch (error) {}
};

export const addToBasket = (newItem) => async (dispatch) => {
  try {
    await fetchApi(`foods/${newItem.id}/addToBasket`, {
      method: "POST",
      body: { amount: newItem.amount },
    });

    dispatch(getBasket());
  } catch (error) {}
};

export const updateBasket =
  ({ id, amount }) =>
  async (dispatch) => {
    try {
      await fetchApi(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });

      dispatch(getBasket());
    } catch (error) {}
  };

export const deleteBasket = (id) => async (dispatch) => {
  try {
    await fetchApi(`basketItem/${id}/delete`, {
      method: "PUT",
    });

    dispatch(getBasket());
  } catch (error) {}
};

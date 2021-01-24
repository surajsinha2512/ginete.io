import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const  response  = await fetch(
      "https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien"
    );
    const data=await response.json();
    const offer=data.offers;
    // console.log(offer);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: offer,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: err.message,
    });
  }
};

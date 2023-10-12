import axios from "axios";

const initialState = {
  savings: [],
  loading: false,
};
export const savingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SAVINGS_SUCCESS":
      return {
        ...state,
        savings: action.payload,
        loading: false,
      };
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export function getSavings() {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const savedData = await axios.get(
      "https://assign19.nithinrocky30.repl.co/savings"
    );
    const fetchedData = savedData.data.savingsData;
    console.log(savedData.data.savingsData);
    if (savedData.status === 200) {
      dispatch({
        type: "FETCH_SAVINGS_SUCCESS",
        payload: savedData.data.savingsData,
      });
    }
  };
}
export function setSavings(savingData) {
  return async function (dispatch, getState) {
    // dispatch({ type: "FETCH_DATA_LOADING" });
    console.log(savingData);
    const data = await fetch(
      `https://assign19.nithinrocky30.repl.co/add-savings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(savingData),
      }
    );
    if (data.status === 201) {
      dispatch(getSavings());
    }
  };
}

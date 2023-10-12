import axios from "axios";

const initialState = {
  expenses: [],
  loading: false,
};
export const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXPENSES_SUCCESS":
      return {
        ...state,
        expenses: action.payload,
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
export function getExpenses() {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const expData = await axios.get(
      "https://assign19.nithinrocky30.repl.co/expense"
    );
    console.log(expData.data.expenseData);
    if (expData.status === 200) {
      dispatch({
        type: "FETCH_EXPENSES_SUCCESS",
        payload: expData.data.expenseData,
      });
    }
  };
}
export function setExpenses(expenseData) {
  return async function (dispatch, getState) {
    // dispatch({ type: "FETCH_DATA_LOADING" });
    const data = await fetch(
      `https://assign19.nithinrocky30.repl.co/add-expense`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expenseData),
      }
    );
    if (data.status === 201) {
      dispatch(getExpenses());
    }
  };
}

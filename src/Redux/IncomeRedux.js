import axios from "axios";

const initialState = {
  inventory: [],
  loading: false,
};
export const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INCOME_SUCCESS":
      return {
        ...state,
        income: action.payload,
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
export function getIncome() {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const IncomeData = await axios.get(
      "https://assign19.nithinrocky30.repl.co/income"
    );
    const fetchedData = IncomeData.data.incomeData;
    if (IncomeData.status === 200) {
      dispatch({
        type: "FETCH_INCOME_SUCCESS",
        payload: fetchedData,
      });
    }
  };
}
export function setIncome(incomeData) {
  console.log(incomeData);
  return async function (dispatch, getState) {
    // dispatch({ type: "FETCH_DATA_LOADING" });
    console.log(incomeData);
    const data = await fetch(
      `https://assign19.nithinrocky30.repl.co/add-income`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(incomeData),
      }
    );
    if (data.status === 201) {
      dispatch(getIncome());
    }
  };
}

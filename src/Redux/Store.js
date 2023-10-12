import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { incomeReducer } from "./IncomeRedux";
import { savingsReducer } from "./SavingsRedux";
import { expensesReducer } from "./ExpenseRedux";
const allReducers = combineReducers({
  incomeReducer,
  savingsReducer,
  expensesReducer,
});
export const store = createStore(allReducers, applyMiddleware(thunk));
console.log(allReducers);

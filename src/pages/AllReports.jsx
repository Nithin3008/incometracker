import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getExpenses } from "../Redux/ExpenseRedux";
import { getIncome } from "../Redux/IncomeRedux";
import { getSavings } from "../Redux/SavingsRedux";
import TableItems from "../components/TableItems";

const AllReports = () => {
  const dispatcher = useDispatch();
  const expenseList = useSelector((state) => state.expensesReducer);
  const savingsList = useSelector((state) => state.savingsReducer);
  const incomeList = useSelector((state) => state.incomeReducer);
  const [filterType, setFilter] = useState("None");
  useEffect(() => {
    dispatcher(getIncome());
    dispatcher(getSavings());
    dispatcher(getExpenses());
  }, [dispatcher]);

  return (
    <div className="w-fit m-auto space-x-2 space-y-4 flex flex-col justify-center items-center mt-8">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option>None</option>
        <option value={"incomeVsExpense"}>Income vs Expenses</option>
        <option value={"expense"}>Expense BreakDown</option>
      </select>
      {filterType == "incomeVsExpense" ? (
        <>
          {" "}
          <div>
            <TableItems data={expenseList.expenses}></TableItems>
          </div>
          <div>
            <TableItems data={incomeList.income}></TableItems>
          </div>
        </>
      ) : filterType == "expense" ? (
        <div>
          <TableItems data={expenseList.expenses}></TableItems>
        </div>
      ) : (
        <h1>Select an Option Above</h1>
      )}
    </div>
  );
};

export default AllReports;

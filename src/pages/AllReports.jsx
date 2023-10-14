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
  const cate = expenseList?.expenses?.map((val) => val?.category);

  const cateOutput = new Set(cate);

  const totalAmount = savingsList?.savingss?.reduce(
    (acc, val) => acc + val.amount,
    0
  );

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
            <h1>Expense Report</h1>
            <TableItems data={expenseList.expenses}></TableItems>
          </div>
          <div>
            <h1>Income Expense</h1>
            <TableItems data={incomeList.income}></TableItems>
          </div>
          <div>Total Saving Amount :{totalAmount}</div>
        </>
      ) : filterType == "expense" ? (
        <ul>
          {Array.from(cateOutput)?.map((category) => (
            <li key={category}>
              <strong className="text-xl">{category}:</strong>
              <ul>
                {expenseList?.expenses
                  .filter((expense) => expense.category === category)
                  .map((expense) => (
                    <li key={expense.id}>
                      <p>{expense.description}</p>
                      <p>{expense.amount}</p>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Select an Option Above</h1>
      )}
    </div>
  );
};

export default AllReports;

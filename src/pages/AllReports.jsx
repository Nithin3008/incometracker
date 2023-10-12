import React from "react";
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

  useEffect(() => {
    dispatcher(getIncome());
    dispatcher(getSavings());
    dispatcher(getExpenses());
  }, [dispatcher]);
  return (
    <div className="w-fit m-auto space-x-2 space-y-4 flex flex-col justify-center items-center mt-8">
      <div>
        <TableItems data={expenseList.expenses}></TableItems>
      </div>
      <div className="text-center">
        <TableItems data={savingsList.savings}></TableItems>
      </div>
      <div>
        <TableItems data={incomeList.income}></TableItems>
      </div>
    </div>
  );
};

export default AllReports;

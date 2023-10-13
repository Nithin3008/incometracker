import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExpenses, getExpenses } from "../Redux/ExpenseRedux";
import IncomeUi from "../components/IncomeUi";

const Expense = () => {
  const dispatcher = useDispatch();
  const [displayForm, setDisplay] = useState(false);
  const [sortByValue, setSort] = useState(false);
  const [filterApplied, setFilter] = useState("None");
  useEffect(() => {
    dispatcher(getExpenses());
  }, [dispatcher]);
  const expenseList = useSelector((state) => state.expensesReducer);

  function getExpenseForm(event) {
    event.preventDefault();
    const data = {
      description: event.target.description.value,
      amount: event.target.amount.value,
      category: event.target.category.value,
      date: event.target.date.value,
    };
    console.log(data);
    dispatcher(setExpenses(data));
    setDisplay(!displayForm);
  }
  const cate = expenseList?.expenses?.map((val) => val?.category);

  const cateOutput = new Set(cate);
  const totalAmount = expenseList?.expenses?.reduce(
    (acc, val) => acc + val.amount,
    0
  );
  const sortData = sortByValue
    ? expenseList.expenses.sort((a, b) => b.amount - a.amount)
    : expenseList.expenses;
  const filterData =
    filterApplied != "None"
      ? sortData.filter((val) => val.category == filterApplied)
      : sortData;
  return (
    <>
      <div
        style={{
          display: displayForm ? "block" : "none",
        }}
        className="fixed hidden inset-0 overflow-auto bg-black bg-opacity-40 z-50"
      >
        <form
          onSubmit={(e) => {
            getExpenseForm(e);
            e.target.reset();
          }}
          className="p-6 flex flex-col text-xl rounded-lg bg-white w-fit mt-36 mx-auto space-y-2 space-x-2 "
        >
          <label>Enter Description</label>
          <input
            className="border-2 border-gray-400"
            required
            id="description"
            type="text"
          ></input>
          <label>Enter Amount</label>
          <input
            className="border-2 border-gray-400"
            required
            id="amount"
            type="number"
          ></input>
          <label>Enter Category</label>
          <input
            className="border-2 border-gray-400"
            required
            id="category"
            type="string"
          ></input>
          <label>Select Date</label>
          <input
            className="border-2 border-gray-400"
            required
            id="date"
            type="date"
          ></input>
          <button
            className="border-2 p-2 bg-blue-500 border-blue-500 rounded-md"
            type="submit"
          >
            Submit
          </button>
          <button
            className="border-2 p-2 bg-red-500 border-red-500 rounded-md"
            onClick={() => setDisplay(!displayForm)}
          >
            Cancel
          </button>
        </form>
      </div>
      <div className="mx-auto w-1/2 text-center">
        <h1>Filters</h1>
        <label>
          Sort By price{" "}
          <input
            onClick={(e) => setSort(e.target.checked)}
            type="checkbox"
          ></input>
        </label>
        <span>
          Filter Category{" "}
          <select onClick={(e) => setFilter(e.target.value)}>
            <option>None</option>
            {Array.from(cateOutput)?.map((val, i) => (
              <option key={i}>{val}</option>
            ))}
          </select>
        </span>
      </div>
      <ul>
        {filterData?.map((val) => (
          <IncomeUi key={val._id} data={val}></IncomeUi>
        ))}
      </ul>
      <h1 className="text-center">Total Amount: {totalAmount}</h1>
      <div className="text-center">
        <button
          className="bg-red-500 p-2 text-lg text-white"
          onClick={() => setDisplay(!displayForm)}
        >
          Add New Savings
        </button>
      </div>
    </>
  );
};

export default Expense;

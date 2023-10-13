import React from "react";

const IncomeUi = ({ data }) => {
  return (
    <>
      <li className="border-4 list-none w-2/4 m-auto space-y-2 p-2 my-2">
        <p>
          <span className="font-medium text-xl">Description : </span>
          {data.description}
        </p>
        <p>
          <span className="font-medium text-xl">Amount : </span>
          {data.amount}
        </p>
        <p>
          <span className="font-medium text-xl">Date : </span>
          {data.date}
        </p>
        <p>
          <span className="font-medium text-xl">Category : </span>
          {data.category}
        </p>
      </li>
    </>
  );
};

export default IncomeUi;

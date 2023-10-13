import React from "react";

const TableItems = ({ data }) => {
  const tableRows = data.map((item, index) => (
    <tr key={index}>
      <td className="p-2 border border-stone-500">{item.description}</td>{" "}
      {/* Replace with your object properties */}
      <td className="p-2 border border-stone-500">{item.amount}</td>
      <td className="p-2 border border-stone-500">{item.category}</td>
      {/* Add more <td> elements for additional properties */}
    </tr>
  ));
  const totalAmount = data.reduce((acc, val) => acc + val.amount, 0);
  return (
    <>
      <table>
        <thead>
          <tr className="border border-stone-500">
            <th className="p-2 border border-stone-500">Description</th>{" "}
            {/* Replace with your column headers */}
            <th className="p-2 border border-stone-500">amount</th>
            <th className="p-2 border border-stone-500">Category</th>
            {/* Add more <th> elements for additional headers */}
          </tr>
        </thead>
        <tbody className="border border-stone-500 ">{tableRows}</tbody>
      </table>
      <h1>Total Amount: {totalAmount}</h1>
    </>
  );
};

export default TableItems;

import React from "react";

const TableItems = ({ data }) => {
  const tableRows = data.map((item, index) => (
    <tr key={index}>
      <td className="p-2 border border-stone-500">{item.description}</td>{" "}
      {/* Replace with your object properties */}
      <td className="p-2 border border-stone-500">{item.amount}</td>
      <td className="p-2 border border-stone-500">{item.price}</td>
      <td className="p-2 border border-stone-500">{item.category}</td>
      {/* Add more <td> elements for additional properties */}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr className="border border-stone-500">
          <th className="p-2 border border-stone-500">Description</th>{" "}
          {/* Replace with your column headers */}
          <th className="p-2 border border-stone-500">amount</th>
          <th className="p-2 border border-stone-500">Price</th>
          <th className="p-2 border border-stone-500">Category</th>
          {/* Add more <th> elements for additional headers */}
        </tr>
      </thead>
      <tbody className="border border-stone-500 ">{tableRows}</tbody>
    </table>
  );
};

export default TableItems;

import React from "react";

const TableItem = () => {
  return (
    <tr className="bg-white border-b ">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
      >
        Apple MacBook Pro 17"
      </th>
      <td className="py-4 px-6">Sliver</td>
      <td className="py-4 px-6">Laptop</td>
      <td className="py-4 px-6">$2999</td>
      <td className="py-4 px-6">
        <a href="#" className="font-medium text-blue-600  hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default TableItem;

import React from "react";
import File from "../icons/File";

type Props = {
  file: any;
};

const TableItem = ({ file }: Props) => {
  return (
    <tr className="bg-white border-b ">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2"
      >
        <div>
          <File />
        </div>
        <div>{file.name}</div>
      </th>
      <td className="py-4 px-6">8.68 MB</td>
      <td className="py-4 px-6">Alexander William</td>
      <td className="py-4 px-6">Jun 12, 2022</td>
      <td className="py-4 px-6">
        <a href="#" className="font-medium text-blue-600  hover:underline">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default TableItem;

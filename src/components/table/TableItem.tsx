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
      <td className="py-4 px-6">{file.size}</td>
      <td className="py-4 px-6">{file.uploader}</td>
      <td className="py-4 px-6">{file.createdAt}</td>
      <td className="py-4 px-6">
        <a href="#" className="font-medium text-blue-600  hover:underline">
          Download
        </a>
      </td>
    </tr>
  );
};

export default TableItem;

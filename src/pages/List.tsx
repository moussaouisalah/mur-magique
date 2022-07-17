import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import Table from "../components/table/Table";
import TableItem from "../components/table/TableItem";
import Title from "../components/Title";
import useFiles from "../hooks/useFiles";

const List = () => {
  const { files, status, error } = useFiles();

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <Container>
      <div className="w-full max-w-5xl flex flex-col items-center gap-5">
        <Title label="File d'attente" />
        <Table headers={["Name", "File Size", "Uploader", "Date"]}>
          {files.map((file: any) => (
            <TableItem />
          ))}
        </Table>
      </div>
    </Container>
  );
};

export default List;

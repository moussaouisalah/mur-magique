import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import Table from "../components/table/Table";
import TableItem from "../components/table/TableItem";
import Title from "../components/Title";
import useFetch from "../hooks/useFetch";

const List = () => {
  const {
    data: files,
    loading,
    error,
  } = useFetch(
    "http://localhost:3000/files"
  ); /* TODO: replace with actual endpoint */

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !files) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <Container>
      <div className="w-full max-w-5xl flex flex-col items-center gap-5">
        <Title label="File d'attente" />
        <Table headers={["Name", "File Size", "Uploader", "Date"]}>
          {files.map((file: any) => (
            <TableItem file={file} />
          ))}
        </Table>
      </div>
    </Container>
  );
};

export default List;

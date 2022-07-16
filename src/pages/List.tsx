import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Table from "../components/table/Table";
import TableItem from "../components/table/TableItem";
import Title from "../components/Title";

const List = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className="w-full max-w-5xl flex flex-col items-center gap-5">
          <Title label="File d'attente" />
          <Table headers={["test", "test"]}>
            {[1, 4, 4, 4, 4].map((item) => (
              <TableItem />
            ))}
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default List;

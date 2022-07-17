import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import group from "../assets/group.png";

const Home = () => {
  return (
    <Container>
      <section className="max-w-4xl flex items-center justify-around gap-5">
        <div>
          <h1 className="text-4xl font-bold max-w-xl mb-5">
            Ajoutez votre code rapidement avec Mur Magique
          </h1>
          <Button label="Upload code" />
        </div>
        <div className="w-96">
          <img src={group} alt="group" />
        </div>
      </section>
    </Container>
  );
};

export default Home;

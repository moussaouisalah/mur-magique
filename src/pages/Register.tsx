import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import User from "../components/icons/User";
import Input from "../components/Input";
import Title from "../components/Title";

const Register = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className="flex flex-col items-center gap-5 w-full max-w-xl">
          <Title label="Créer un compte" />
          <Input Icon={<User />} placeholder="Username" />
          <Input Icon={<User />} placeholder="Email" />
          <Input Icon={<User />} placeholder="Password" isPassword />
          <Button label="Créer un compte" isFullWidth />
          <p>
            Avez vous un compte? <Link to="/login">S'identifier</Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Register;

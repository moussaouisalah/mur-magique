import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import User from "../components/icons/User";
import Input from "../components/Input";
import Title from "../components/Title";
import useCurrentUser from "../hooks/useCurrentUser";

const Register = () => {
  const { register, status } = useCurrentUser();
  console.log("rend");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: any) => {
    e.preventDefault();
    console.log("register");
  };

  return (
    <Container>
      <form
        onSubmit={handleRegister}
        className="flex flex-col items-center gap-5 w-full max-w-xl"
      >
        <Title label="Créer un compte" />
        <Input
          Icon={<User />}
          placeholder="Username"
          value={username}
          onChange={setUsername}
        />
        <Input
          Icon={<User />}
          placeholder="Email"
          value={email}
          onChange={setEmail}
        />
        <Input
          Icon={<User />}
          placeholder="Password"
          value={password}
          onChange={setPassword}
          isPassword
        />
        <Button label="Créer un compte" isFullWidth />
        <p>
          Avez vous un compte? <Link to="/login">S'identifier</Link>
        </p>
      </form>
    </Container>
  );
};

export default Register;

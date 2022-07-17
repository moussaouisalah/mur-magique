import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import User from "../components/icons/User";
import Input from "../components/Input";
import Title from "../components/Title";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <div className="flex flex-col items-center gap-5 w-full max-w-xl">
        <Title label="Connectez-vous à votre compte" />
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
        <Button label="Connectez-vous" isFullWidth />
        <p>
          Vous n'avez pas de compte? <Link to="/register">S'inscrire</Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;

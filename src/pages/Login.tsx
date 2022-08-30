import axios from "../api";
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
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user-id", response.data.user.id);
        window.location.href = "/list";
      })
      .catch((error) => {
        setError(error.response.data);
        setLoading(false);
      });
  };

  return (
    <Container>
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center gap-5 w-full max-w-xl"
      >
        <Title label="Connectez-vous à votre compte" />
        <p>{error}</p>
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
        <Button label="Connectez-vous" isFullWidth isLoading={isLoading} />
        <p>
          Vous n'avez pas de compte? <Link to="/register">S'inscrire</Link>
        </p>
      </form>
    </Container>
  );
};

export default Login;

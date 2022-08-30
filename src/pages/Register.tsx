import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import User from "../components/icons/User";
import Input from "../components/Input";
import Title from "../components/Title";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3000/users", {
        username,
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
        onSubmit={handleRegister}
        className="flex flex-col items-center gap-5 w-full max-w-xl"
      >
        <Title label="Créer un compte" />
        <p>{error}</p>
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
        <Button label="Créer un compte" isFullWidth isLoading={isLoading} />
        <p>
          Avez vous un compte?{" "}
          <Link to="/login" className="text-blue-600">
            S'identifier
          </Link>
        </p>
      </form>
    </Container>
  );
};

export default Register;

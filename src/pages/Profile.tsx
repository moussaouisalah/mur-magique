import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import User from "../components/icons/User";
import Input from "../components/Input";
import Title from "../components/Title";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container>
      <div className="flex flex-col items-center gap-5 w-full max-w-xl">
        <Title label="Profil" />
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
        <Button label="Modifier" />
      </div>
    </Container>
  );
};

export default Login;

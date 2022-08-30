import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import User from "../components/icons/User";
import Input from "../components/Input";
import Title from "../components/Title";
import UserContext from "../contexts/UserContext";

const Profile = () => {
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEditProfile = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios
      .put(`http://localhost:3000/users/${currentUser.id}`, {
        username,
        email,
      })
      .then((_) => {
        setCurrentUser({ ...currentUser, username, email });
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
        onSubmit={handleEditProfile}
        className="flex flex-col items-center gap-5 w-full max-w-xl"
      >
        <Title label="Profil" />
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
        <Button label="Modifier" isLoading={isLoading} />
      </form>
    </Container>
  );
};

export default Profile;

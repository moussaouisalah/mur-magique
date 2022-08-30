import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import User from "../components/icons/User";
import Input from "../components/Input";
import Title from "../components/Title";
import UserContext from "../contexts/UserContext";

const Profile = () => {
  const [currentUser] = useContext(UserContext);
  const [username, setUsername] = useState(currentUser.username);
  const [email, setEmail] = useState(currentUser.email);

  const handleEditProfile = () => {
    console.log(username, email);
  };

  return (
    <Container>
      <form
        onSubmit={handleEditProfile}
        className="flex flex-col items-center gap-5 w-full max-w-xl"
      >
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
      </form>
    </Container>
  );
};

export default Profile;

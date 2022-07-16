import { useState } from "react";

export default function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  setTimeout(() => {
    setCurrentUser({
      id: "1",
      name: "John Doe",
      email: "",
    });
    setStatus("done");
  }, 2000);

  const login = () => {};
  const logout = () => {};
  const register = () => {};
  const edit = () => {};

  return {
    status,
    currentUser,
    error,
    login,
    logout,
    register,
    edit,
  };
}

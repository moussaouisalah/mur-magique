import { useMutation, useQuery } from "react-query";
import { doLogin, doRegister, editCurrentUser, getCurrentUser } from "../api";

export default function useCurrentUser() {
  const { data, isLoading, error } = useQuery(["currentUser"], getCurrentUser);
  console.log(data, isLoading, error);
  // login
  const {
    isLoading: isLoadingLogin,
    error: loginError,
    mutate: login,
  } = useMutation(doLogin);

  const logout = () => {};

  // register
  const {
    isLoading: isLoadingRegister,
    error: registerError,
    mutate: register,
  } = useMutation(doRegister);

  // edit
  const {
    isLoading: isLoadingEdit,
    error: editError,
    mutate: edit,
  } = useMutation(editCurrentUser);

  const status = isLoading ? "loading" : error ? "error" : "done";

  return {
    status,
    currentUser: data,
    error,
    login,
    logout,
    register,
    edit,
  };
}

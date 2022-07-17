import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import LoadingSpinner from "../LoadingSpinner";

const ProtectedRouter = ({ redirectTo }: any) => {
  const { currentUser, status, error } = useCurrentUser();

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  return currentUser ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectedRouter;

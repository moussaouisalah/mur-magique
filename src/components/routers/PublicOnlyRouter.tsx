import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useCurrentUser from "../../hooks/useCurrentUser";
import LoadingSpinner from "../LoadingSpinner";

const PublicOnlyRouter = ({ redirectTo }: any) => {
  const { currentUser, status } = useCurrentUser();

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  return currentUser ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicOnlyRouter;

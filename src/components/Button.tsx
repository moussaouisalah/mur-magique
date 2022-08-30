import clsx from "clsx";
import React from "react";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  label: string;
  onClick?: () => void;
  isFullWidth?: boolean;
  isLoading?: boolean;
};

const Button = ({ label, onClick, isFullWidth, isLoading }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={clsx(
        "flex items-center justify-center text-white bg-blue-500 h-14 rounded-lg",
        isFullWidth ? "w-full" : "px-8"
      )}
    >
      {label} {isLoading && <LoadingSpinner />}
    </button>
  );
};

export default Button;

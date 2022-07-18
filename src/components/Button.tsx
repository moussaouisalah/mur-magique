import clsx from "clsx";
import React from "react";

type Props = {
  label: string;
  onClick?: () => void;
  isFullWidth?: boolean;
};

const Button = ({ label, onClick, isFullWidth }: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center text-white bg-blue-500 h-14 rounded-lg",
        isFullWidth ? "w-full" : "px-8"
      )}
    >
      {label}
    </button>
  );
};

export default Button;

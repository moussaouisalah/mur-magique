import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Link } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";
import LoadingSpinner from "./LoadingSpinner";

const HeaderDropDown = () => {
  const { currentUser, status } = useCurrentUser();

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (!currentUser) {
    return <></>;
  }

  return <p>salam</p>;
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="w-full max-w-4xl m-auto flex items-center justify-between p-5">
      <h1 className="text-blue-500 font-bold text-xl">Mur magique</h1>
      <ul className="flex items-center justify-evenly gap-5 font-bold">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/list">File d'attente</Link>
        </li>
        <li>
          <Link to="/upload">Upload code</Link>
        </li>
      </ul>
      <div
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="cursor-pointer relative"
      >
        <div>Header</div>
        {isOpen && (
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div className="absolute bg-white shadow-lg rounded-lg">
              <HeaderDropDown />
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5">
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
      <div>L</div>
    </div>
  );
};

export default Header;

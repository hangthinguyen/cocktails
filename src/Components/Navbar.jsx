import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justity-between p-4 w-full border-b-2 border-b-emerald-700 shadow-3xl">
      <div className="w-full flex justify-between">
        <div className="tracking-widest">
          <Link to="/">
            The<span className="font-bold text-emerald-700">Cocktail</span>DB
          </Link>
        </div>

        <ul className="flex gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

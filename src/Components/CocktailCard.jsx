import { Link } from "react-router-dom";
const Cocktail = ({ name, glass, img, id }) => {
  return (
    <div className="flex flex-col m-6 rounded-md shadow-3xl transition-all duration-300 ease-in-out hover:shadow-4xl">
      <div>
        <img src={img} alt="img" className="rounded-t-md" />
      </div>

      <div className="p-6 tracking-widest flex flex-col gap-2">
        <h2 className="text-3xl font-bold">{name}</h2>

        <p className="text-xl font-semibold">{glass}</p>

        <p className="tracking-normal text-neutral-400">Alcoholic</p>

        <button className="uppercase tracking-widest bg-green-800 px-2 py-1 rounded w-24 hover:bg-green-200 ease-in-out transition-all duration-500">
          <Link to={id}>Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Cocktail;

import { useCallback, useEffect, useState } from "react";
import CocktailsList from "./CocktailsList";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [cocktails, setCocktails] = useState([]);

  const Cocktails = useCallback(() => {
    async function fetchDrinks() {
      try {
        const response = await fetch(`${URL}${searchTerm}`);
        const data = await response.json();
        setCocktails(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDrinks();
  }, [searchTerm]);

  useEffect(() => {
    Cocktails();
  }, [Cocktails]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-center bg-white px-10 py-8 rounded-md shadow-3xl w-8/12 flex-col">
        <h2 className="tracking-widest font-bold text-emerald-700 mb-3">
          Search for your favorate cocktails
        </h2>
        <form action="submit" className="flex justify-center">
          <input
            type="text"
            className="w-full bg-gray-100 rounded-sm p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      {!cocktails.drinks ? (
        <h2 className="font-bold text-3xl p-8 tracking-widest">
          No Cocktails Matched Your Search Criteria
        </h2>
      ) : (
        <section className="pt-20">
          <CocktailsList cocktails={cocktails} />
        </section>
      )}
    </div>
  );
};

export default Search;

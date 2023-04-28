import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [cocktail, setCocktail] = useState([]);
  let { id } = useParams();

  const handleFetchDrinkById = useCallback(() => {
    async function fetchDrinkbyId() {
      try {
        const response = await fetch(`${URL}${id}`);
        const data = await response.json();
        setCocktail(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDrinkbyId();
  }, [id]);

  useEffect(() => {
    handleFetchDrinkById();
  }, [handleFetchDrinkById]);

  return (
    <div className="flex flex-col items-center p-20">
      <button className="text-center px-6 py-2 bg-emerald-700 tracking-widest text-white uppercase rounded-md">
        <Link to="/">Back Home</Link>
      </button>
      <div>
        <h1 className="font-bold text-2xl p-4 text-center">
          {cocktail?.drinks?.[0]?.strDrink}
        </h1>
        <div className="flex gap-16 mt-16">
          <div className="w-96">
            <img
              src={cocktail?.drinks?.[0]?.strDrinkThumb}
              alt="img"
              className="w-full rounded-md"
            />
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <div className="flex gap-4">
              <span className="bg-emerald-300 px-2 rounded-sm">Name:</span>
              <p className="font-bold">{cocktail?.drinks?.[0]?.strDrink}</p>
            </div>

            <div className="flex gap-4">
              <span span className="bg-emerald-300 px-2 rounded-sm">
                Category:
              </span>
              <p className="font-bold">{cocktail?.drinks?.[0]?.strCategory}</p>
            </div>

            <div className="flex gap-4">
              <span className="bg-emerald-300 px-2 rounded-sm">Glass:</span>
              <p className="font-bold">{cocktail?.drinks?.[0]?.strGlass}</p>
            </div>

            <div className="flex gap-4">
              <span span className="bg-emerald-300 px-2 rounded-sm">
                Instruction:
              </span>
              <p className="font-bold">
                {cocktail?.drinks?.[0]?.strInstructions}
              </p>
            </div>

            <div className="flex gap-4">
              <span className="bg-emerald-300 px-2 rounded-sm">
                Ingredients:
              </span>
              <p className="font-bold">
                {cocktail?.drinks?.[0]?.strIngredient1},
                {cocktail?.drinks?.[0]?.strIngredient2},
                {cocktail?.drinks?.[0]?.strIngredient3},
                {cocktail?.drinks?.[0]?.strIngredient4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;

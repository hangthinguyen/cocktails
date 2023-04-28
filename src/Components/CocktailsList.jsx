import CocktailCard from "./CocktailCard";

const CocktailsList = ({ cocktails }) => {
  return (
    <div>
      <h1 className="text-4xl text-center tracking-widest font-bold mt-2 mb-14 ">
        Cocktails
      </h1>
      <div className="grid auto-rows-auto lg:grid-cols-3 lg:mx-28 grid-cols-1 sm:grid-cols-2 mx-16">
        {cocktails.drinks?.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            id={cocktail.idDrink}
            name={cocktail.strDrink}
            glass={cocktail.strGlass}
            img={cocktail.strDrinkThumb}
          />
        ))}
      </div>
    </div>
  );
};

export default CocktailsList;

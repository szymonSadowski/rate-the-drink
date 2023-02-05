import { z } from "zod";

const drinksSchema = z.object({
  strDrink: z.string(),
  strDrinkThumb: z.string(),
});

const drinkArray = z.object({
  drinks: z.array(drinksSchema),
});

export const getDrinks = () => {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  ).then((res) =>
    res.json().then((res) => {
      return drinkArray.parse(res);
    })
  );
};

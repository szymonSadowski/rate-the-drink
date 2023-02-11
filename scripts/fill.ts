import { prisma } from "./../src/server/db";
import { z } from "zod";

const drinksSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
});

const drinkArray = z.object({
  drinks: z.array(drinksSchema),
});

const fill = async () => {
  const data = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  ).then((res) =>
    res.json().then((res) => {
      return drinkArray.parse(res);
    })
  );

  const correctSchemaData = data.drinks.map((drink) => {
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      votedFor: 0,
    };
  });
  const creation = await prisma.drinks.createMany({
    data: correctSchemaData,
  });

  console.log("Creation?", creation);
};

void fill();

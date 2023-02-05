const MAX_DEX_ID = 100;

export const getRandomDrink: (notThisOne?: number) => number = (notThisOne) => {
  const drinkNumber = Math.floor(Math.random() * MAX_DEX_ID) + 1;

  if (drinkNumber !== notThisOne) return drinkNumber;
  return getRandomDrink(notThisOne);
};

export const getRandomDrinks = () => {
  const firstId = getRandomDrink();
  const secondId = getRandomDrink(firstId);
  return {
    first: firstId,
    second: secondId,
  };
};

import { useQuery } from "@tanstack/react-query";
import { getDrinks } from "src/utils/queries";

export const useDrink = () => {
  return useQuery({
    queryKey: ["drinks"],
    queryFn: () => getDrinks(),
    cacheTime: 1000 * 60 * 1000,
  });
};

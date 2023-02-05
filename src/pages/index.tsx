import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { getRandomDrinks } from "src/utils/selectRandomDrinks";
import { useDrink } from "src/utils/useDrink";

const Home: NextPage = () => {
  const { data, isLoading, isError } = useDrink();
  const [randomDrinks, setRandomDrinks] = useState(getRandomDrinks());
  if (isLoading) return <div>null</div>;
  if (isError) return <div>Request Failed</div>;

  const handleClick = (drinkName: string) => {
    console.log(drinkName);
    setRandomDrinks(getRandomDrinks());
  };
  return (
    <>
      <Head>
        <title>Rate That Drink</title>
        <meta
          name="description"
          content="App crated with love for code and fancy drinks"
        />
        <link rel="icon" href="/drink.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-pink-700 to-pink-200">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Rate That <span className="text-pink-600">Drink</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {data.drinks && (
              <>
                <div
                  onClick={() =>
                    handleClick(data.drinks[randomDrinks.first]?.strDrink)
                  }
                  className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white cursor-pointer hover:bg-white/20"
                >
                  <h3 className="text-2xl font-bold text-center">
                    {data.drinks[randomDrinks.first]?.strDrink}
                  </h3>
                  <Image
                    src={data.drinks[randomDrinks.first]?.strDrinkThumb}
                    alt="First drink thumb"
                    width={350}
                    height={350}
                    className="animate-fade-in"
                  />
                </div>
                <div
                  onClick={() =>
                    handleClick(data.drinks[randomDrinks.second]?.strDrink)
                  }
                  className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white cursor-pointer hover:bg-white/20"
                >
                  <h3 className="text-2xl font-bold text-center">
                    {data.drinks[randomDrinks.second]?.strDrink}
                  </h3>
                  <Image
                    src={data.drinks[randomDrinks.second]?.strDrinkThumb}
                    alt="First drink thumb"
                    width={350}
                    height={350}
                    className="animate-fade-in"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

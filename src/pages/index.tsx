import { api } from "../utils/api";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Layout } from "src/components/Layout";
import { Loading } from "src/components/Loading";
import { getRandomDrinks } from "src/utils/selectRandomDrinks";

const Home: NextPage = () => {
  const [randomDrinks, setRandomDrinks] = useState(getRandomDrinks());
  const mutation = api.voting.vote.useMutation();
  const drinks = api.voting.resultVoting.useQuery();
  const handleClick = (id: string) => {
    mutation.mutate(id);
    setRandomDrinks(getRandomDrinks());
  };
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Rate That <span className="text-pink-600">Drink</span>
        </h1>
        {drinks.data && !mutation.isLoading ? (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <div
                onClick={() =>
                  handleClick(drinks.data.result[randomDrinks.first]?.id)
                }
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white cursor-pointer hover:bg-white/20"
              >
                <h3 className="text-2xl font-bold text-center">
                  {drinks.data.result[randomDrinks.first]?.name}
                </h3>
                <Image
                  src={drinks.data.result[randomDrinks.first]?.image}
                  alt="First drink thumb"
                  width={350}
                  height={350}
                  className="animate-fade-in"
                />
              </div>
              <div
                onClick={() =>
                  handleClick(drinks.data.result[randomDrinks.second]?.id)
                }
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white cursor-pointer hover:bg-white/20"
              >
                <h3 className="text-2xl font-bold text-center">
                  {drinks.data.result[randomDrinks.second]?.name}
                </h3>
                <Image
                  src={drinks.data.result[randomDrinks.second]?.image}
                  alt="First drink thumb"
                  width={350}
                  height={350}
                  className="animate-fade-in"
                />
              </div>
              <div />
            </div>
            <div className="flex align-center justify-center w-full">
              <Link href="/leaderboard">
                <button className="inline-flex items-center justify-center rounded-md text-xl font-medium bg-pink-100 p-4 hover:bg-pink-50">
                  Check out leaderbord
                </button>
              </Link>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
};

export default Home;

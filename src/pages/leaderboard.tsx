import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "src/components/Layout";
import { api } from "src/utils/api";

const Leaderboard: NextPage = () => {
  const drinks = api.voting.resultVoting.useQuery();
  return (
    <Layout>
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] mt-12">
        Leaderboard
      </h1>
      {drinks.data && (
        <div className="bg-gradient-to-b from-pink-300 to-pink-100 mt-12">
          {drinks.data.result.map((drink, index) => (
            <div
              key={drink.id}
              className="grid grid-cols-6 max-w-s p-4 border border-white"
            >
              <span>{index + 1}.</span>
              <span className="col-span-4">{drink.name}</span>
              <span>{drink.votedFor}</span>
            </div>
          ))}
        </div>
      )}
      <Link href="/">
        <button className="inline-flex items-center justify-center rounded-md text-xl font-medium bg-pink-100 p-4 hover:bg-pink-50 mt-12 mb-12">
          Go back to voting
        </button>
      </Link>
    </Layout>
  );
};

export default Leaderboard;

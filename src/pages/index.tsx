import { api } from "../utils/api";
import { type NextPage } from "next";
import Head from "next/head";
import { useDrink } from "src/utils/useDrink";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data, error, isLoading } = useDrink();
  // const handleClick = () => {
  //   console.log("a drink was selected", hello);
  // };
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading</div>;
  console.log(data);
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
            <div
              // onClick={handleClick}
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            >
              <h3 className="text-2xl font-bold">Old fashioned</h3>
              <div className="text-lg">Photo</div>
            </div>
            <div
              // onClick={handleClick}
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            >
              <h3 className="text-2xl font-bold">Daiquiri</h3>
              <div className="text-lg">Photo</div>
            </div>
          </div>
        </div>
        {/* <p className="text-2xl text-white">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p> */}
      </main>
    </>
  );
};

export default Home;

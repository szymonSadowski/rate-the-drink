import Head from "next/head";

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
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
        {props.children}
      </main>
    </>
  );
};

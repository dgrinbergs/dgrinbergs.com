import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import { Route } from "../types/Route";

type card = {
  link: Route;
  excert: string;
};

const cards: card[] = [
  {
    link: {
      name: "About",
      href: "/about",
    },
    excert: "Some information about me and my journey as a developer",
  },
  {
    link: {
      name: "Projects",
      href: "/projects",
    },
    excert: "Check out what I have made and what I am currently working on",
  },
];

const Home: NextPage = () => {
  return (
    <div className="dark:bg-neutral-900 dark:text-neutral-300">
      <Head>
        <title>DGrinbergs.com</title>
        <meta name="description" content="My slice of the internet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center min-h-screen justify-center">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-4xl font-medium">DGrinbergs.com</h1>
          <p className="text-xl">Welcome to my slice of the internet!</p>
        </div>

        <div className="grid grid-cols-1 p-8 gap-4">
          {cards.map((card) => (
            <Link href={card.link.href} key={card.link.name}>
              <a className="p-4 border border-black dark:border-neutral-300 rounded-md">
                <h2 className="text-2xl">{card.link.name} &rarr;</h2>
                <p>{card.excert}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <div className="border-t border-black dark:border-neutral-300">
        <Footer />
      </div>
    </div>
  );
};

export default Home;

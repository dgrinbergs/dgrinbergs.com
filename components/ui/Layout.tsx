import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>DGrinbergs.com</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-auto dark:bg-neutral-900 dark:text-neutral-300">
        <div className="min-h-screen">
          <div className="sticky top-0 z-40 backdrop-blur flex-none transition-colors border-b border-black dark:border-neutral-300">
            <Navigation />
          </div>
          <div className="max-w-7xl m-auto">
            <div className="mx-4 my-6">
              {title && <h2 className="text-2xl">{title}</h2>}
              {children}
            </div>
          </div>
        </div>
        <div className="border-t border-black dark:border-neutral-300">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;

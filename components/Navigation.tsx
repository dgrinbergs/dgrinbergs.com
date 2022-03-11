import Link from "next/link";
import { useState } from "react";
import Hamburger from "./Hamburger";
import { routes } from "../data/routes";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => setOpen(!open);

  const { asPath } = useRouter();

  return (
    <nav className="flex flex-col justify-between p-4 max-w-7xl m-auto md:flex-row md:items-center md:space-y-0">
      <div className="flex flex-row justify-between items-center">
        <Link href="/" passHref>
          <a className="text-2xl font-medium">
            <h1>DGrinbergs.com</h1>
          </a>
        </Link>
        <div className="md:hidden">
          <Hamburger open={open} onClick={onClick} />
        </div>
      </div>
      {open && (
        // Mobile links
        <ul className="flex flex-col space-y-4 text-lg py-4">
          {routes.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} passHref>
                <a
                  className={`${
                    asPath === href
                      ? "text-sky-500 underline underline-offset-4"
                      : ""
                  }`}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <ul
        className="hidden md:flex flex-row space-y-0 items-center space-x-4"
        style={{ height: 50 }}
      >
        {routes.map(({ name, href }) => (
          // Desktop links
          <motion.li key={name} whileHover={{ scale: 1.1 }}>
            <Link href={href} passHref>
              <a
                className={`${
                  asPath === href
                    ? "text-sky-500 underline underline-offset-4"
                    : ""
                } hover:text-sky-500 transition ease-in-out duration-100`}
              >
                {name}
              </a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

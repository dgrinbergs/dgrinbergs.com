import Link from "next/link";
import { useState } from "react";
import Hamburger from "./Hamburger";
import { routes } from "../data/routes";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => setOpen(!open);

  return (
    <nav className="flex flex-col justify-between space-y-2 p-4 max-w-7xl m-auto md:flex-row md:items-center md:space-y-0">
      <div className="flex flex-row justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-medium">
            <h1>DGrinbergs.com</h1>
          </a>
        </Link>
        <div className="md:hidden">
          <Hamburger open={open} onClick={onClick} />
        </div>
      </div>
      {open && <ul className={`flex flex-col space-y-4 text-lg`}>
        {routes.map(({ name, href }) => (
          <li key={name}>
            <Link href={href}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>}
      <ul className={`hidden md:flex md:flex-row md:space-y-0 md:items-center md:space-x-4`}>
        {routes.map(({ name, href }) => (
          <li key={name}>
            <Link href={href}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

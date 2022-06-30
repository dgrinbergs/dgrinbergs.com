import Link from "next/link";

const links = [
  {
    name: "Github",
    href: "https://github.com/dgrinbergs",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dainisg/",
  },
  {
    name: "Photography Portfolio",
    href: "https://photography.dgrinbergs.com",
  },
];

const Footer = () => {
  return (
    <footer className="px-4 py-12 grid grid-cols-1 gap-4 max-w-7xl m-auto">
      <Link href="/" passHref>
        <a className="text-xl w-min font-semibold underline underline-offset-4 hover:text-sky-500 transition ease-in-out">
          DGrinbergs.com
        </a>
      </Link>

      <ul className="flex flex-col space-y-2 text-sm">
        {links.map(({ name, href }) => (
          <a href={href} key={name} target="_blank" rel="noreferrer">
            {name} &rarr;
          </a>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

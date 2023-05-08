import Link from "next/link";

const links = [
  {
    name: "Github",
    href: "https://api.dgrinbergs.com/redirector/r/b63b8c71-875c-42a9-b70b-3e0349a9716a",
  },
  {
    name: "LinkedIn",
    href: "https://api.dgrinbergs.com/redirector/r/0415e9b2-adc8-4d4e-aa4e-b1718f088337",
  },
  {
    name: "Photography Portfolio",
    href: "https://api.dgrinbergs.com/redirector/r/5f09420c-b4ac-4d99-b1c6-01f3fe78387e",
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

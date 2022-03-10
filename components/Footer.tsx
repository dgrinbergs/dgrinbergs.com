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
    <footer className="p-4 grid grid-cols-1 gap-4 max-w-7xl m-auto">
      <p className="font-semibold">DGrinbergs.com</p>
      <p className="text-sm">
        I didn&apos;t know what to put here. But the site looked strange without a
        footer. So here are some links :)
      </p>
      <ul className="flex flex-col space-y-2">
        {links.map(({ name, href }) => (
          <a href={href} key={name}>{name} &rarr;</a>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

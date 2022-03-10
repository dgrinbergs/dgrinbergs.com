import { ReactNode } from "react";

type Props = {
  heading?: string;
  leftBorder: boolean;
  children: ReactNode;
};

const Section = ({ heading, leftBorder, children }: Props) => {
  return (
    <section>
      {heading && <h3 className="text-xl text-sky-500 my-4">{heading}</h3>}
      <div className={leftBorder ? "border-l dark:border-neutral-300 pl-4 border-black" : ""}>
        {children}
      </div>
    </section>
  );
};

export default Section;

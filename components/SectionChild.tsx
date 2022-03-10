import { ReactNode } from "react";

type Props = {
  heading?: string;
  children: ReactNode;
};

const SectionChild = ({ heading, children }: Props) => {
  return (
    <div className="my-2">
      <h3 className="text-lg font-semibold">{heading}</h3>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
};

export default SectionChild;

type SectionChild = {
  heading: string;
  dates?: string;
  text: string[];
};

type Section = {
  name: string;
  children: SectionChild[];
};

export default Section;

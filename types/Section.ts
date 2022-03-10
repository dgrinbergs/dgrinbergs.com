export type SectionChild = {
  heading: string;
  dates?: string;
  text: string[];
};

export type Section = {
  name: string;
  children: SectionChild[];
};

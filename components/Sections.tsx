import SectionType from "../types/Section";
import Section from "../components/Section";
import SectionChild from "./SectionChild";

const Sections = ({ sections }: { sections: SectionType[] }) => {
  return (
    <>
      {sections.map((section) => (
        <Section heading={section.name} leftBorder={true} key={section.name}>
          {section.children.map((child) => (
            <SectionChild heading={child.heading} key={child.heading}>
              {child.dates && (
                <p className="text-sm py-1 text-neutral-600 dark:text-neutral-400">
                  {child.dates}
                </p>
              )}
              {child.text.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </SectionChild>
          ))}
        </Section>
      ))}
    </>
  );
};

export default Sections;

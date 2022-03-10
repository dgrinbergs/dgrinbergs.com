import type { NextPage } from "next";
import Layout from "../components/Layout";
import Section from "../components/Section";
import SectionChild from "../components/SectionChild";
import { sections } from "../data/about";

const about: NextPage = () => {
  return (
    <Layout title="Some Details About Me">
      {sections.map((section) => (
        <Section heading={section.name} leftBorder={true} key={section.name}>
          {section.children.map((child) => (
            <SectionChild heading={child.heading} key={child.heading}>
              {child.dates && <p className="text-sm py-1 text-neutral-600 dark:text-neutral-400">{child.dates}</p>}
              {child.text.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </SectionChild>
          ))}
        </Section>
      ))}
    </Layout>
  );
};

export default about;

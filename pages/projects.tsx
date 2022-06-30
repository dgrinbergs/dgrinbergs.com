import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import data from "../data/projects";

const projects: NextPage = (props: any) => {
  return (
    <Layout title="My projects">
      <Projects {...props} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: data,
    },
  };
};

export default projects;

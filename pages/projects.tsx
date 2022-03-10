import type { NextPage } from "next";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

const projects: NextPage = () => {
  return (
    <Layout title="My Projects">
      <Projects />
    </Layout>
  );
};

export default projects;

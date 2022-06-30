import type { GetStaticProps, NextPage } from "next";
import Layout from "../components/Layout";
import Sections from "../components/Sections";
import data from "../data/about";

const about: NextPage = (props: any) => {
  return (
    <Layout title="Information about me">
      <Sections {...props} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      sections: data,
    },
  };
};

export default about;

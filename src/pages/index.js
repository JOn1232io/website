import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Chart from "../components/chart";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="flex flex-wrap p-4">
      <div className="md:w-1/3 w-full h-full">
        <div>Map</div>
      </div>
      <div className="md:w-2/3 w-full flex flex-col" style={{ height: "85vh" }}>
        <div className="flex" style={{ height: "50%" }}>
          <Chart className="mb-4 w-1/2 mr-4" caption="Caption.">
            Chart
          </Chart>
          <Chart className="mb-4 w-1/2 ml-4" caption="Caption.">
            Chart
          </Chart>
        </div>
        <div className="flex" style={{ height: "50%" }}>
          <Chart className="mb-4 w-1/2 mr-4" caption="Caption.">
            Chart
          </Chart>
          <Chart className="mb-4 w-1/2 ml-4" caption="Caption.">
            Chart
          </Chart>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import data from "../data/about.yml";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="flex flex-wrap p-4">
      <article className="article mt-16 mb-20 mx-auto">
        <h1 className="py-2 px-4 text-dark uppercase text-4xl text-center font-bold">
          Our Mission
        </h1>
        <section className="container">
          <p
            className="leading-10 text-center"
            style={{ marginLeft: `10%`, marginRight: `10%` }}
          >
            {data.mission}
          </p>
        </section>
      </article>

      <section className="team w-full">
        <h1
          className="m-0 py-2 px-8 bg-dark text-light text-center font-bold uppercase"
          style={{
            fontSize: `1.5em`,
          }}
        >
          Our Team
        </h1>
        <section className="p-4 pb-0 bg-white color-dark block">
          {data.content.map(team => (
            <div className="pb-4">
              <h2 className="font-normal mb-2 first:bg-highlight text-2xl">
                {team.category}
              </h2>
              <div
                className="members"
                style={{
                  display: `grid`,
                  gridTemplateColumns: `repeat(auto-fit, minmax(20rem, 1fr))`,
                  gap: `1rem`,
                }}
              >
                {team.members.map(member => (
                  <span
                    className="member bg-highlight text-white p-4 font-bold uppercase tracking-wide"
                    style={{
                      boxShadow: `0 0.125rem 0.125rem -0.125rem black`,
                    }}
                  >
                    {member.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  </Layout>
);

export default AboutPage;

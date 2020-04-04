import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="flex flex-wrap p-4">
      <article className="article mt-16 mb-20 mx-auto w-full">
        <h1 className="py-2 px-4 text-dark uppercase text-4xl text-center font-bold">
          Send us a message
        </h1>
        <section>
          <p
            className="leading-10 text-center"
            style={{ marginLeft: `10%`, marginRight: `10%` }}
          >
            Are you a hospital that needs resources?{" "}
            <a
              href="https://forms.gle/qNMzx9vATTk695o89"
              className="text-highlight hover:underline"
              target="_blank"
            >
              Click Here!
            </a>{" "}
            Can you donate supplies? Leave us a message below!
          </p>
        </section>
      </article>

      <form
        action="#"
        method="POST"
        className="w-full md:grid-cols-4 md:w-3/4 md:mx-auto"
        style={{
          display: `grid`,
          gridTemplateColumns: `repeat(4, 1fr)`,
          //   gridTemplateColumns: `0.5fr repeat(4, 1fr) 0.5fr`,
          gap: `1rem`,
        }}
      >
        <input
          type="text"
          name="name"
          style={{
            transition: `all 0.25s ease`,
            borderBottom: `3px solid #304352`,
            // gridColumn: `span 4`,
            // gridColumn: `2 / 4`,
          }}
          className="text-base border-0 bg-dark text-light p-4 flex flex-col justify-start items-start focus:text-dark focus:bg-white col-span-4 md:col-span-2"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          style={{
            transition: `all 0.25s ease`,
            borderBottom: `3px solid #304352`,
          }}
          className="text-base border-0 bg-dark text-light p-4 flex flex-col justify-start items-start focus:text-dark focus:bg-white col-span-4 md:col-span-2"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          className="text-base border-0 bg-dark text-light p-4 flex flex-col justify-start items-start focus:text-dark focus:bg-white md:col-span-4"
          style={{
            transition: `all 0.25s ease`,
            borderBottom: `3px solid #304352`,
            gridColumn: `span 4`,
          }}
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="text-baseborder-0 bg-white text-highlight flex justify-center items-start md:col-span-4 md:w-1/2 md:mx-auto"
          style={{
            borderBottom: `3px solid #e44c65`,
            gridColumn: `span 4`,
          }}
          onMouseEnter={e => {
            e.target.style.color = `white`;
            e.target.style.backgroundColor = `#e44c65`;
          }}
          onMouseLeave={e => {
            e.target.style.color = `#e44c65`;
            e.target.style.backgroundColor = `white`;
          }}
        >
          <p
            className="w-full h-full p-4 text-center"
            style={{
              textAlign: `center`,
              transition: `all 0.25s ease`,
            }}
          >
            Submit
          </p>
        </button>
      </form>
    </section>
  </Layout>
);

export default ContactPage;

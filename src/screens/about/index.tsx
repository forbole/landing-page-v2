import React from "react";
import Link from "next/link";
import Layout from "@src/src/components/layout";

const About = () => {
  return (
    <Layout title="About Us">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

export default About;

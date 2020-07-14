import Link from "next/link";
import Layout from "../components/Layoutold";
import "../components/Layoutdef.scss";
import "../components/indexdef.scss";

const AboutPage = () => (
  <Layout title="About Us">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;

import Link from "next/link";
import Layout from "@components/Layout";
import Head from "next/head";

const IndexPage = () => (
  <Layout title="Forbole">
    <div>
      <Head>
        <title>Forbole</title>
      </Head>
      <div className="hero">
        <h1>Co-Building Interchain</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </div>

      <div className="container">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, in.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sed qui
          nulla quisquam possimus voluptas optio repellat molestias corporis,
          non in perspiciatis sint voluptatem velit ratione quis labore autem
          temporibus.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

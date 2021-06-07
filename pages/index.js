import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fibi</title>
        <meta name="description" content="Fibi: Your college companion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Fibi v0.0.1</h1>
      </main>
    </div>
  );
}

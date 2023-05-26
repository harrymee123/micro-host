import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const RemoteMario = dynamic(() => import("marioApp/mario"), { ssr: false });
const RemoteLuigi = dynamic(() => import("luigiApp/luigi"), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Microfrontends Demo</title>
        <meta
          name="description"
          content="Demo for Microfrontends using Module Federation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <RemoteMario />
        <RemoteLuigi />
      </div>
    </div>
  );
}

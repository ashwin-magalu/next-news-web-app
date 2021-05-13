import Head from "next/head";
import styles from "../styles/Home.module.css";
import Toolbar from "../components/Toolbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next News</title>
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1>Next News App</h1>
          <h3>Your one stop shop for the latest news articles</h3>
        </div>
      </div>
    </>
  );
}

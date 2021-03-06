import Head from "next/head";
import Toolbar from "../components/Toolbar";
import styles from "../styles/EOM.module.css";

const EOM = ({ employee }) => {
  return (
    <>
      <Head>
        <title>Next News - EOM</title>

        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/ashwin-magalu/next-tutorial-for-beginners/main/public/logo.png"
        />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is Ashwin M A`}
        />

        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/ashwin-magalu/next-tutorial-for-beginners/main/public/logo.png"
        />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is Ashwin M A`}
        />
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1 style={{ color: "cadetblue" }}>Employee Of The Month</h1>
          <div className={styles.employeeOfTheMonth}>
            <h2>Ashwin M A</h2>
            <h4>Senior Software Developer</h4>
            <img src="https://raw.githubusercontent.com/ashwin-magalu/next-tutorial-for-beginners/main/public/logo.png" />
            <p>{employee.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  /* we are not using this data completely */
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;

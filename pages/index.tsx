import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "/styles/Home.module.css";
import { ReactElement } from "react";
import GlobalLayout from "../components/Layouts/GlobalLayout";

const inter = Inter({ subsets: ["latin"] });

/**
 *
 * @returns {JSX.Element}:The JSX.Element for the Home page
 */

export default function Home() {
  return (
    <>
      <Head>
        <title>Luxify | shop your attitute</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>Hello</main>
    </>
  );
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <GlobalLayout>{page}</GlobalLayout>;
// };

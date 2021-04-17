import Head from "next/head"
import Header from "../components/header"
import styles from "../styles/Index.module.css"

export default function Positions() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Positions</title>
        <link rel="icon" href={"/slow.png"} />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}> Welcome to Positions! </h1>
      </main>
    </div>
  )
}

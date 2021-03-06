import Head from "next/head"
import Header from "../components/header"
import styles from "../styles/Index.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Slow Grow - Positions</title>
        <link rel="icon" href={"/slow.png"} />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Top Page!
        </h1>
        <Link href={`/positions`}> positions </Link>
      </main>
    </div>
  )
}

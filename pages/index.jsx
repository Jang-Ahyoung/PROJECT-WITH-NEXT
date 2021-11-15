import Head from 'next/head';
import Camera from '../components/Camera/Camera';
import Header from '../components/Header/Header';
import Visitor from '../components/Visitor/Visitor';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ang Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={styles.section}>
        <div className={styles.leftSide}>
          <Camera />
        </div>
        <div className={styles.leftSide}>
          <Visitor />
        </div>
      </section>
    </div>
  );
}

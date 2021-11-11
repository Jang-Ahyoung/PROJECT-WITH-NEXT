import Head from 'next/head';
import Header from '../components/Header/Header';
import styles from '../styles/Home.module.css';

export default function Home({mainData, cardData}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ang Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}

export async function getStaticProps() {
  {/* pull some data from server, 정적 or 서버 사이드 랜더링 - 변경될 가능성 있는 데이터 */}
  const mainData = await fetch('https://links').then((res) => res.json());
  const cardData = await fetch('https://links2').then((res) => res.json());

  return { props : { mainData, cardData } };
}
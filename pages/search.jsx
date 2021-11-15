import { useRouter } from 'next/router';
import Camera from '../components/Camera/Camera';
import Header from '../components/Header/Header';
import styles from '../styles/Home.module.css';

function Search() {
  const router = useRouter();
  const { search, startDate, endDate } = router.query;
  const range =
    startDate == endDate ? `${startDate}` : `${startDate} 부터 ${endDate}`;

  return (
    <div>
      <Header placeholder={`${search} | ${range}`} />
      <section className={styles.search}>
        <p>
          {range}에 대한 "{search}"의 검색 결과
        </p>
        <Camera />
      </section>
    </div>
  );
}

export default Search;

import { useRouter } from 'next/router';
import Header from '../components/Header/Header';

function Search() {
  const router = useRouter();
  const { search, startDate, endDate } = router.query;
  const range = `${startDate} - ${endDate}`;

  return (
    <div>
      <Header placeholder={`${search} | ${range}`} />
      {range} 일자에 대한 검색어 {search}의 결과
    </div>
  );
}

export default Search;

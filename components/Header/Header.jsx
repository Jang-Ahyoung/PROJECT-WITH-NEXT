import styles from './Header.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

function Header() {
  const [input, setInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };
  const handleSelect = (date) => {
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.userImage}>
            <Image
              src="http://img.danawa.com/prod_img/500000/242/761/img/6761242_1.jpg?shrink=500:500&_v=20200221135725"
              width="50px"
              height="50px"
              objectFit="contain"
              objectPosition="left"
              className={styles.image}
            />
          </div>
          <div className={styles.userName}>
            <p>Hi,</p>
            <p>Ahyoung</p>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.serchBar}>
            <input
              className={styles.input}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <FaSearch />
          </div>
          <div className={styles.bellIcon}>
            <BsBell />
          </div>
        </div>
      </header>
      {input && (
        <div className={styles.section}>
          <div className={styles.calendar}>
            <DateRangePicker
              ranges={[selectionRange]}
              rangeColors={['red']}
              onChange={handleSelect}
            />
            <div className={styles.calendar_bottom}>
              <button className={styles.cancleBtn} onClick={() => setInput('')}>
                취소
              </button>
              <button className={styles.searchBtn}>확인</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;

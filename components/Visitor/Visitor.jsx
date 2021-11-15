import styles from './Visitor.module.css';

function Visitor() {
  return (
    <div className={styles.container}>
      <h2>Visitor</h2>
      <div className={styles.guestbook}>
        <img
          className={styles.gusetImage}
          src="http://img.danawa.com/prod_img/500000/242/761/img/6761242_1.jpg?shrink=500:500&_v=20200221135725"
        />
        <div className={styles.guestInfo}>
          <div className={styles.InfoTop}>
            <p className={styles.name}>귀요미 노란부리 펭귄</p>
            <p className={styles.date}>2021-11-15</p>
          </div>

          <p className={styles.text}>반가워요 ⭐️</p>
        </div>
      </div>
      <div className={styles.guestbook}>
        <img
          className={styles.gusetImage}
          src="http://img.danawa.com/prod_img/500000/242/761/img/6761242_1.jpg?shrink=500:500&_v=20200221135725"
        />
        <div className={styles.guestInfo}>
          <div className={styles.InfoTop}>
            <p className={styles.name}>귀요미 노란부리 펭귄</p>
            <p className={styles.date}>2021-11-14</p>
          </div>
          <p className={styles.text}>안녕하세요 😻</p>
        </div>
      </div>
    </div>
  );
}

export default Visitor;

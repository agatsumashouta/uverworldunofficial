import Link from 'next/link';
import styles from '../styles/Home.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <h1>こんにちは</h1>
      <img src='.\images\IMG_1140(Edited).jpg' alt='我妻翔大' className={styles.img}></img>
      {/* <Link href="/about">
        Aboutページへ
      </Link> */}
    </div>
  );
}

export default HomePage;
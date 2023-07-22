import Link from 'next/link';
import styles from '../styles/Home.module.css';

function HomePage() {
  return (
    <div className='styles.container'>
      <h1>ホームページ</h1>
      <p>ようこそ！</p>
      <Link href="/about">
        <a>Aboutページへ</a>
      </Link>
    </div>
  );
}

export default HomePage;

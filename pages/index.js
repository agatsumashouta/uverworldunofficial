import Link from 'next/link';
import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/header';

function HomePage() {
  return (
    <div>
      <Head>
        <title>UVERworld非公式ファンサイト</title>
      </Head>
      <Header />
      <section id='Home'>
        <img src='.\images\enigmasis.jpg' alt='UVERworld_enigmasis' className={styles.img}></img>
      </section>
      <section id='Menber'>
        <h2 className='text-4xl'>Menber</h2>
        <p>TAKUYA∞</p>
        <p>彰</p>
        <p>克也</p>
        <p>信人</p>
        <p>真太郎</p>
        <p>誠果</p>
      </section>
      <section id='Music'>
        <h2 className='text-4xl'>Music</h2>
      <iframe width="200" height="100" src="https://www.youtube.com/embed/q3tvnCbFbo8" title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='m-1'></iframe>
        <iframe width="200" height="100" src="https://www.youtube.com/embed/lJ8njmZjTMU" title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='m-1'></iframe>
        <iframe width="200" height="100" src="https://www.youtube.com/embed/KDJ9fv9EQys" title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='m-1'></iframe>
      </section>
      <section id='Link' >
        <h2 className='text-4xl'>公式リンク</h2>
        <div className='flex'>
        <a href='https://www.youtube.com/@uverworldSMEJ/featured'>
          <img src='./images/YouTube.png' alt='UVERworld Official YouTube Channel' width={50} height={50}  className='flex-2'/>
        </a>
        <a href='https://www.instagram.com/uverworld_official'>
          <img src='./images/Instagram.png' alt='uverworld_official' width={50} height={50} className='flex-2'/>  
        </a>
        <a href='https://uw-takuya-rooms.fanpla.jp'>
          <img src='./images/takuyanotukurikata.jpg' alt='TAKUYA∞の創り方' width={50} height={50} className='flex-2'></img>
        </a>
        </div>
      </section>
      <section id='Staff'>
        <h2 className='text-4xl'>Staff</h2>
        <p>作成者:syouta∞</p>
      </section>
    </div>
  );
}

export default HomePage;
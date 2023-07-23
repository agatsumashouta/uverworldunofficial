import Link from 'next/link';
import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/header';

function HomePage() {
  return (
    <div>
      <Head>
        <title>UVERworld非公式ファンサイト</title>
      </Head>

      <section id='Home' className='relative'>
        <h1 className="absolute inset-0 text-9xl font-customFont text-white flex items-center justify-center text-center -top-1/4 -left-1/2">UVERworld</h1>
        <p className="absolute inset-0 text-5xl font-customFont text-white flex items-center justify-center text-center top-1/6 -left-1/2">UNOFFICIALFANSITE</p>
        <img src='.\images\enigmasis.jpg' alt='UVERworld_enigmasis' id='main-image' className="w-full h-full"></img>
      </section>
      <div className=''>
        <Header />
        <section id='Menber' className='m-5'>
          <h2 className='text-4xl'>Menber</h2>
          <p>TAKUYA∞</p>
          <p>彰</p>
          <p>克也</p>
          <p>信人</p>
          <p>真太郎</p>
          <p>誠果</p>
        </section>
        <section id='Music' className='m-5'>
          <h2 className='text-4xl'>Music</h2>
          <iframe width="200" height="100" src="https://www.youtube.com/embed/q3tvnCbFbo8" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='m-1'></iframe>
          <iframe width="200" height="100" src="https://www.youtube.com/embed/lJ8njmZjTMU" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='m-1'></iframe>
          <iframe width="200" height="100" src="https://www.youtube.com/embed/KDJ9fv9EQys" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='m-1'></iframe>
        </section>
        <section id='Link' className='m-5'>
          <h2 className='text-4xl'>公式リンク</h2>
          <div className='flex'>
            <a href='https://www.youtube.com/@uverworldSMEJ/featured'>
              <img src='./images/YouTube.png' alt='UVERworld Official YouTube Channel' width={50} height={50} className='flex-2' />
            </a>
            <a href='https://www.instagram.com/uverworld_official'>
              <img src='./images/Instagram.png' alt='uverworld_official' width={50} height={50} className='flex-2' />
            </a>
            <a href='https://uw-takuya-rooms.fanpla.jp'>
              <img src='./images/takuyanotukurikata.jpg' alt='TAKUYA∞の創り方' width={50} height={50} className='flex-2'></img>
            </a>
          </div>
        </section>
        <section id='Staff' className='m-5'>
          <h2 className='text-4xl'>Staff</h2>
          <p>作成者:syouta∞</p>
        </section>
        <p>a</p>
        <p>a</p>

        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>

        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
      </div>
    </div>
  );
}

export default HomePage;
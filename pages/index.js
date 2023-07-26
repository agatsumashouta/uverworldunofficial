import Link from 'next/link';
import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/header';
import Menber from '../components/menber';
import Music from '../components/music';
import Links from '../components/links';
import Staff from '../components/staff';

function HomePage() {
  return (
    <div className='w-full'>
      <Head>
        <title>UVERworld非公式ファンサイト</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <section id='Home' className='relative'>
        <h1 className="text-2xl absolute inset-0 md:text-5xl lg:text-9xl font-customFont1 text-white flex items-center justify-center text-center -top-1/4 -left-1/2">UVERworld</h1>
        <p className="text-8px absolute inset-0 max-w-xs:text-xs md:text-2xl lg:text-5xl font-customFont1 text-white flex items-center justify-center text-center top-1/6 -left-1/2">UNOFFICIALFANSITE</p>
        <img src='.\images\enigmasis.jpg' alt='UVERworld_enigmasis' id='main-image' className="w-full h-full"></img>
      </section>
      <div className=''>
        <Header />
        <Menber />
        <div id="modal-root"></div>
        <Music />
        <Links />
        <Staff />
      </div>
    </div>
  );
}

export default HomePage;
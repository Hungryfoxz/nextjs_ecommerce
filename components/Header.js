import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const Header = () => {
  return (
    <>
    <Head>
        <title>CodesWear</title>
        <meta name="description" content="CodesWear.com - wear the code" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Script src="https://kit.fontawesome.com/424d9b0ac7.js" crossorigin="anonymous">
    </Script>
    </>
  )
}

export default Header
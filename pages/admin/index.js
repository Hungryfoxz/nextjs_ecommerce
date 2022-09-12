import React from 'react';
import Script from 'next/script';
import AdminTemplate from '../../components/admin/AdminTemplate';

const index = () => {
  return (
    <>
    <Script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer></Script>
    <style jsx global>{`
      nav{
        display: none;
      }
      footer{
        display: none;
      }
    `}</style>
    <AdminTemplate/>
    </>
  )
}

export default index
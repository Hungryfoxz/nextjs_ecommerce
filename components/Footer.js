import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="text-gray-600 body-font bg-gradient-to-br from-cyan-100 via-cyan-200 to-cyan-300">
  <div className="container px-5 pb-10 pt-14 md:py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg width="200" height="40" viewBox="0 0 283 64" fill="none" className='text-blue-600'
            xmlns="http://www.w3.org/2000/svg">
            <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/>
        </svg>
        <span className="ml-3 text-xl">CodesWear</span>
      </a>
      <p className="mt-2 text-sm text-blue-700 ml-10">Wear the Code.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 cursor-pointer hover:text-blue-600">T-Shirts</a>
          </li>
          <li>
            <a className="text-gray-600  cursor-pointer hover:text-blue-600">Hoodies</a>
          </li>
          <li>
            <a className="text-gray-600  cursor-pointer hover:text-blue-600">Stickers</a>
          </li>
          <li>
            <a className="text-gray-600  cursor-pointer hover:text-blue-600">Accessories</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4 hidden md:block">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PRICING</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 cursor-pointer hover:text-blue-600">Offers</a>
          </li>
          <li>
            <a className="text-gray-600  cursor-pointer hover:text-blue-600">Enterprise</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4 hidden md:block">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">MEDIA</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 cursor-pointer hover:text-blue-600">Youtube</a>
          </li>
          <li>
            <a className="text-gray-600  cursor-pointer hover:text-blue-600">Twitch</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gradient-to-r from-cyan-50 via-cyan-100 to-cyan-200">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-700 text-sm text-center sm:text-left">© 2022 CodesWear —
        <a href="https://twitter.com/hungryf0xz" rel="noopener noreferrer" className="text-gray-700 ml-1" target="_blank">@hungryf0xz</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-700 hover:text-black cursor-pointer">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-5 text-gray-700 hover:text-black cursor-pointer">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-5 text-gray-700 hover:text-black cursor-pointer">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-5 text-gray-700 hover:text-black cursor-pointer">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer
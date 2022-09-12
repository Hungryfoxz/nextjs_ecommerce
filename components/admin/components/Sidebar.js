import React from 'react';
import { BiHomeHeart,BiAddToQueue,BiUpload,BiCartAlt, BiNotification } from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineViewInAr } from 'react-icons/md';

const Sidebar = () => {
  return (
    <>
    {/* Sidebar */}
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-slate-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
              </div>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-200 pr-6 ease-in-out duration-200">
                <span className="inline-flex justify-center items-center ml-4">
                    <BiHomeHeart className='text-xl'/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-200 pr-6 ease-in-out duration-200">
                <span className="inline-flex justify-center items-center ml-4">
                    <BiNotification className='text-xl'/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-200 ease-in-out pr-6 duration-200">
                <span className="inline-flex justify-center items-center ml-4">
                  <BiAddToQueue className='text-xl'/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Add Product</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-200 ease-in-out pr-6 duration-200">
                <span className="inline-flex justify-center items-center ml-4">
                  <MdOutlineViewInAr className='text-xl'/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">View Product</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-200 ease-in-out pr-6 duration-200">
                <span className="inline-flex justify-center items-center ml-4">
                  <BiUpload className='text-2xl'/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Image Uploader</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-200 ease-in-out pr-6 duration-200">
                <span className="inline-flex justify-center items-center ml-4">
                  <BiCartAlt className='text-xl'/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Orders</span>
                
              </a>
            </li>
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
              </div>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-200 duration-200 ease-in-out pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                <CgProfile className='text-xl'/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
              </a>
            </li>
            <li>
              <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500  text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-green-200 duration-200 ease-in-out pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                  <FiSettings className='text-xl'/>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
              </a>
            </li>
          </ul>
          <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Copyright @2022</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar
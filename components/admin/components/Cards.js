import React from 'react';
import {BsPeople,BsBagCheck} from 'react-icons/bs';
import { AiOutlineRise } from 'react-icons/ai';
import {MdOutlineInventory2} from 'react-icons/md';

const Cards = () => {
  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div className="bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500 shadow-lg rounded-md flex items-center justify-between p-3 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
             <BsPeople className='z-10 text-black text-2xl'/>
            </div>
            <div className="text-right">
              <p className="text-2xl">1,257</p>
              <p>Visitors</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500   shadow-lg rounded-md flex items-center justify-between p-3 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
             <BsBagCheck className='z-10 text-black text-2xl'/>
            </div>
            <div className="text-right">
              <p className="text-2xl">557</p>
              <p>Orders</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500  shadow-lg rounded-md flex items-center justify-between p-3 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
             <AiOutlineRise className='z-10 text-black text-2xl'/>
            </div>
            <div className="text-right">
              <p className="text-2xl">$11,257</p>
              <p>Sales</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-500  shadow-lg rounded-md flex items-center justify-between p-3 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <MdOutlineInventory2 className='z-10 text-black text-2xl'/>
            </div>
            <div className="text-right">
              <p className="text-2xl">15,257</p>
              <p>Inventory</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cards
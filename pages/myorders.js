import React from 'react';
import { BsBagCheck } from 'react-icons/bs';
import Order from '../models/order';
import mongoose from 'mongoose';


const MyOrder = () => {
  return (
    <>
    <section className='flex-col w-full bg-sky-50 min-h-screen'>

    <div className='flex flex-row w-full items-center justify-center'>
    <h1 className='text-center text-2xl md:text-5xl font-bold leading-9 py-3 mb-10 md:pt-10 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-purple-600 flex flex-row items-center'>My Orders<BsBagCheck className='text-purple-600 mx-2'/></h1>
    </div>

    <section className='flex flex-col px-2 md:px-20'>

    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <thead className="border-b-2 border-cyan-200 bg-gradient-to-r from-cyan-100 via-sky-100 to-purple-100 py-4 rounded-t-md">
                <tr>
                  <th scope="col" className="text-sm md:text-lg font-semibold text-gray-900 px-6 py-6">
                    #
                  </th>
                  <th scope="col" className="text-sm md:text-lg font-semibold text-gray-900 px-6 py-6">
                    First
                  </th>
                  <th scope="col" className="text-sm md:text-lg font-semibold text-gray-900 px-6 py-6">
                    Last
                  </th>
                  <th scope="col" className="text-sm md:text-lg font-semibold text-gray-900 px-6 py-6">
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @mdo
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Jacob
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Thornton
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @fat
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                  <td colSpan="2" className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                    Larry the Bird
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @twitter
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </section>
      
      
    </section>
    </>
  )
}

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    mongoose.connect(process.env.MONGO_URI)
  }
  let orders = await Order.find();
  let order = {}


return {
props: {order : JSON.parse(JSON.stringify(order))}, // will be passed to the page component as props
  }
}

export default MyOrder
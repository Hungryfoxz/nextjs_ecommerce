import React from "react";
import { SiContactlesspayment } from 'react-icons/si'
import AppContext from "../context/AppContext";

export default function Modal({ setOpenModal,handleOrders }) {

    const { clearCart } = React.useContext(AppContext)

    return (
    <>
    <div className="fixed inset-0 z-50 overflow-y-auto">
    <div
        className="fixed inset-0 w-full h-full"
        style={{background: 'rgba( 0, 0, 0, 0.5)', backdropFilter: 'blur(5px)'}}
        onClick={() => setOpenModal(false)}>
    </div>
            
    <div className="flex items-center min-h-screen px-4 py-8">
    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
        <div className="mt-3 sm:flex">
         <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-green-50 rounded-full">
            <SiContactlesspayment className="text-center text-gray-700 text-3xl font-bold"/>
         </div>
        <div className="mt-2 text-center sm:ml-4 sm:text-left">
            <h4 className="text-lg font-medium text-gray-800">
                Payment
            </h4>
            <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                Your items have been added to the Orders with pending Payment status.
                You can go to the Orders page to fulfill the Payment. 
            </p>
         <div className="items-center gap-2 mt-3 sm:flex">
            <button className="w-full mt-2 p-2.5 flex-1 text-white bg-green-500 rounded-md outline-none ring-offset-2 ring-green-400 focus:ring-2" onClick={handleOrders}>Go to Orders</button>
            <button className="w-full mt-2 p-2.5 flex-1 text-gray-700 rounded-md outline-none border ring-offset-2 ring-sky-400 focus:ring-2" 
            onClick={() => {setOpenModal(false);clearCart()}}>Cancel</button>
         </div>
       </div>
      </div>
     </div>
    </div>
    </div>
    </>
    );
}
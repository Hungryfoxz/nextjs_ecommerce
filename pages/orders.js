import React from 'react';
import AppContext from '../context/AppContext';
import { toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
// import Order from '../models/order';
// import mongoose from 'mongoose';


const orders = () => {

  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  ===> subscribing to Global state.
    const { userInfo } = React.useContext(AppContext);
    const router = useRouter()

  // ####################################  PENDING ORDERS  ########################################

  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  ===> Fetching pending orders.
  const PendingOrders = async (id) => { 
     
     let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user_items/fetchItems/pendingOrders`, { 
       method: "POST",
       body: JSON.stringify({ "user_id": id }),
       headers: { "Content-Type": "application/json"}
     });
     let data = await response.json();
    //  console.log(data.orders[0].products)
     if(data.status===true){
       setOrder(data.orders[0]);
       setPending(data.orders[0].products);
     }else{
      setPending(null)
      setOrder(null)
     }
  }

  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::   ===> UseEffect
  React.useEffect(()=>{
    if(userInfo!==null){
      PendingOrders(userInfo._id);
    }
  },[userInfo])

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::   ===> UseState for the pending orders.
  const [pending, setPending ] = React.useState(null)
  const [order, setOrder ] = React.useState(null)
  // if(pending){
  //   Object.keys(pending).map((item)=>{
  //     console.log(pending[item].id) 
  //   })
  // }

  // ######################################  PAID ORDERS  #############################################

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  ===> Paid function to fetch paid orders ..
  const PaidOrders = async (id) => { 
     
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user_items/fetchItems/paidOrders`, { 
      method: "POST",
      body: JSON.stringify({ "user_id": id }),
      headers: { "Content-Type": "application/json"}
    });
    let data = await response.json();
    // console.log(data.orders)
    if(data.status===true){
      // setOrdered(data.orders);
     
        let arr = []
        let newarr = []
        if(data.orders){
          for(let order of data.orders){
            arr.push(order.products)
          }
          arr.map(item=>{
            Object.keys(item).map((key)=>{
              newarr.push(item[key]) 
              })
          })
        }
      setPaid(newarr);
    }else{
     setPaid(null)
    //  setOrdered(null)
    }
 }

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  ===> Use effect to fetch paid orders ..
  React.useEffect(()=>{
    if(userInfo!==null){
      PaidOrders(userInfo._id);
    }
  },[userInfo])

  // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  ===> Paid orders...
  const [paid, setPaid ] = React.useState(null)
  
  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::  ===>  handlePay(), handleBack()...
  const handleBack = () => {
    router.back()
  }

  const handlePay = () => {
    toast.success('Thanks for reaching till here , I really appreciate your effort for testing my project..', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide
      });
  }



  return (
    <>
    <section className='w-full min-h-screen bg-sky-50'>
      <h1 className='text-center text-4xl pt-4 font-bold'>Orders List</h1>
      <div className='p-10 md:px-20 md:py-10'>
      <h3 className='text-left text-2xl text-pink-500 pb-6'>Pending Orders :</h3>
      <h3 className='text-left text-sm text-gray-500'>Order id: # {order?order.orderId:'Not Found'}</h3>


      {!pending?
      <div className="min-h-[20vh] flex justify-center items-center">
        <p>No pending Items</p>
      </div>
      :  //%%%%%%%%%%%%% Condition Here...
      <>
      <div className="w-full scrollbar rounded" id='style-15'>
      <table className="min-w-full text-center ">
              <thead className="border-b-2 border-cyan-200 bg-gradient-to-r from-cyan-100 via-sky-100 to-purple-100 py-4 rounded-t-md">
                <tr>
                  <th scope="col" className="text-sm md:text-lg font-semibold text-gray-900 px-6 py-6">
                    Product ID
                  </th>
                  <th scope="col" className="text-sm md:text-lg font-semibold text-gray-900 px-6 py-6">
                    Name
                  </th>
                  <th scope="col" className="text-sm md:text-lg font-semibold text-gray-900 px-6 py-6">
                    Status
                  </th>
                  <th scope="col" className="text-sm md:text-lg font-semibold text-gray-900 px-6 py-6">
                    Price
                  </th>
                </tr>
              </thead>

              <tbody>

              {Object.keys(pending).map((item)=>{
                return(
                <tr className="bg-white border-b" key={pending[item].id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"># {pending[item].id}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{pending[item].title}</td>
                  <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">{order.status}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{pending[item].price}</td>
                </tr>
                )
               })
               }
              </tbody>
            </table>
            </div>

               <div className='w-full flex items-center justify-end py-4'>
                <button className='px-8 py-2.5 bg-green-400 rounded hover:shadow-lg focus:ring-1 ring-green-500 ring-offset-2 items-center text-white' onClick={handlePay}>Pay</button>
              </div>
      </>
      }


    
          <div className='pb-4'>
            <h3 className='text-left text-2xl text-green-500 py-6'>Paid orders :</h3>
          </div>

          {!paid?
      <div className="min-h-[20vh] flex justify-center items-center">
        <p>No Paid Items</p>
      </div>
      :  //%%%%%%%%%%%%% Condition Here...
      <>
       <div className="w-full scrollbar rounded" id='style-15'>
      <table className="min-w-full text-center">
              <thead className="border-b-2 border-cyan-200 bg-gradient-to-r from-cyan-100 via-sky-100 to-purple-100 py-4 rounded-t-md">
                <tr>
                  <th scope="col" className="text-sm md:text-lg font-semibold text-gray-900 px-6 py-6">
                    Product ID
                  </th>
                  <th scope="col" className="text-sm md:text-lg font-semibold text-gray-900 px-6 py-6">
                    Name
                  </th>
                  <th scope="col" className="text-sm md:text-lg font-semibold text-gray-900 px-6 py-6">
                    Status
                  </th>
                  <th scope="col" className="text-sm md:text-lg font-semibold text-gray-900 px-6 py-6">
                    Price
                  </th>
                </tr>
              </thead>

              <tbody>

              {paid.map((item)=>{
                return(
                <tr className="bg-white border-b" key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-gray-900"># {item.id}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.title}</td>
                  <td className="text-sm text-green-500 font-normal px-6 py-4 whitespace-nowrap">Paid</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.price}</td>
                </tr>
                )
               })
               }
              </tbody>
            </table>
            </div>
               <div className='w-full flex items-center justify-end py-4'>
                <button className='px-8 py-2.5 bg-transparent border border-gray-500 rounded items-center text-gray-500 hover:shadow-lg' onClick={handleBack}>Back</button>
              </div>
        
      </>
      }

      </div>

        </section>
    </>
  )
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ===> Get Server side Props Method...
// export async function getServerSideProps(context){
//   if(!mongoose.connections[0].readyState){
//     await mongoose.connect(process.env.MONGO_URI)
//   }
//   let order = await Order.findById(context.query.id)
//   return {
//     props:{ order: JSON.parse(JSON.stringify(order))}
//   }
// }


export default orders
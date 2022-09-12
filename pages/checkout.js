import React,{useRef,useEffect,useState} from "react";
import Head from "next/head";
import Script from "next/script";
import { BsPatchCheckFill,BsCartCheckFill } from "react-icons/bs";
import {MdOutlineAttachMoney} from 'react-icons/md'
import { FaAddressCard,FaEdit } from 'react-icons/fa';
import { HiColorSwatch } from 'react-icons/hi'
import AppContext from "../context/AppContext";
import randomString from 'random-string';
import Modal from "../components/Modal";
import { useRouter } from "next/router";
import { toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import Loading from "../components/Loading";

const Checkout = () => {

  // #########################################################################
      const { cartItems,userInfo, clearCart } = React.useContext(AppContext);
      const [total, setTotal] = useState(0)
      
      useEffect(()=>{
        if(cartItems){
          let subTotal = 0;
          cartItems.map((item)=>{
              subTotal = subTotal + item.price;
              setTotal(subTotal)
      });
      }
    },[cartItems])
  // ########################################################################

  const initPayment = async (e) => {
    e.preventDefault();
    console.log("Payment started!",nameRef.current.value.length)
    
    if(!userInfo._id)
    return;   // UserInfo === null => return
    if(total===0)
    return;   // Return if total === 0
    if( nameRef.current.value.length<4){toastEmitter('Name')}
    else if (emailRef.current.value.length<4 ){toastEmitter('Email')}
    else if (addressRef.current.value.length<4){toastEmitter('Address')}
    else if (phoneRef.current.value.length<4){toastEmitter('Phone')} 
    // else if (pinRef.current.value.length<4){toastEmitter('Pin')}
    // else if (cityRef.current.value.length<4){toastEmitter('City')} 
    // else if (stateRef.current.value.length<4){toastEmitter('State')}
    else
    {
        let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/payment/prePayment`, { 
          method: "POST",
          body: JSON.stringify({
                              "id" : userInfo._id,
                              "order_id" : Math.floor(Math.random()*10000000)+randomString({length:3}),
                              "address" : addressRef.current.value,
                              "cart" : cartItems,
                              "amount" : total
                              }),
          headers: {"Content-Type": "application/json"}
        });
        
        let data = await response.json();
        if(data.status){
          setShowModal(true);
        }else{
          alert(data.error)
        }
      }
        // e.target.reset();  //Not a function error ,don't no why ??????
      }
      
      const toastEmitter = (message) =>{
        toast(`${message} must be more than 4 characters`, {
          position: "top-right",
          delay: 500,
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          transition: Slide
          });
      }

    

  // ###################################################################### ===> use REF for input data..
  const nameRef = useRef()
  const emailRef = useRef()
  const addressRef = useRef()
  const pinRef = useRef()
  const phoneRef = useRef()
  // const cityRef = useRef()
  // const stateRef = useRef()
  const [pin, setPin ] = React.useState('')
  const [city, setCity ] = React.useState('')
  const [state, setState ] = React.useState('')

  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  ===> handleChange()
  const handleChange = (e) => {
      setPin(e.target.value);
      if(e.target.value.length === 6){
        fetchPin(e.target.value);
      }else{
        setCity('');
        setState('');
      }
  }

  const fetchPin = async (data) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        let pincode = await response.json();
        if(Object.keys(pincode).includes(data)){
          setCity(pincode[data][0]);
          setState(pincode[data][1]);
        }
  }
  
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@========================>Modal State..
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  // Event Dispatcher..
  const goToOrders = () =>{
    console.log("clicked orders");
    router.push('/orders');
    setShowModal(false);
    clearCart();
  }


  return (
    <>
    {cartItems.length===0?
    <>
    <h1 className="text-center text-2xl md:text-5xl font-bold leading-9 py-3 mb-10 md:pt-10 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-purple-600 flex items-center justify-center">
          Checkout
          <BsPatchCheckFill className="text-green-400 mx-1" />
    </h1>
    <section className="max-h-screen flex flex-col justify-center items-center">
      <p className="">Please add atleast one item to checkout.</p>
      <div className="h-[25rem] w-[25rem] mb-96">
        <Loading/>
      </div>
    </section>
    </>

    :  

    <>
    {/* #######################################       Modal      ################################################ */}
      {/* <button className="bg-pink-400 text-white" onClick={()=>setShowModal(true)}>Open</button> */}
      {showModal && <Modal setOpenModal={setShowModal} handleOrders={goToOrders}/>}

    {/* ###################################################################################################  */}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Script></Script>
      <section className="min-h-screen w-full">
        <h1 className="text-center text-2xl md:text-5xl font-bold leading-9 py-3 mb-10 md:pt-10 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-purple-600 flex items-center justify-center">
          Checkout
          <BsPatchCheckFill className="text-green-400 mx-1" />
        </h1>


        <div className="px-4 md:px-16 lg:px-48 w-full pb-10 md:pb-20">
        
        {/* ################################################# Form ################################################# */}
          
          
          <form className="w-full">

            <h1 className="text-start text-xl md:text-2xl font-bold leading-9 py-3 mb-10 md:pt-10 md:mb-8 text-transparent bg-clip-text bg-gradient-to-t from-blue-400 via-sky-400 to-purple-600 flex items-center"><FaAddressCard className="text-green-400 mr-2"/>Address :</h1>

            {/* Name + Email >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  */}
            <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 w-full">
              <div className="mb-6 w-full">
                <input type="text" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="Name" ref={nameRef}/>
              </div>
              <div className="mb-6 w-full">
                <input type="email" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="Email address" ref={emailRef}/>
              </div>
            </div>
            
            {/* Address Box >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  */}
            <div className="mb-6">
              <textarea
                className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address" rows="3" placeholder="Address" ref={addressRef}></textarea>
            </div>

            {/* Phone + Pin >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 w-full">
              <div className="mb-6 w-full">
                <input type="tel" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phone" placeholder="Phone" ref={phoneRef}/>
              </div>
              <div className="mb-6 w-full">
                <input type="number" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="pin" placeholder="PIN" onChange={handleChange} value={pin} name='pin' />
              </div>
            </div>

            {/* City + State >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  */}
            <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 w-full">
              <div className="mb-6 w-full">
                <input readOnly={true} type="text" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="city" placeholder="City" value={city} name='city'/>
              </div>
              <div className="mb-6 w-full">
                <input readOnly={true} type="text" className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="state" placeholder="State" value={state} name='state'/>
              </div> 
            </div>

           
           
           
          {/* ######################################################   Cart Items    ########################################## */}
          <h1 className="text-start text-xl md:text-2xl font-bold leading-9 py-3 mb-10 md:pt-10 md:mb-8 text-transparent bg-clip-text bg-gradient-to-t from-blue-400 via-sky-400 to-purple-600 flex items-center"><BsCartCheckFill className="text-green-400 mr-2"/>Review and edit cart items :</h1>

          {/* The cart items to be brought from the Backend specific to the particular user and to be shown here*/}
          
          <div className="flex flex-col pb-10 w-full">
          {cartItems.length==0?<p>Please add atleast one item to checkout .</p>:
            cartItems.map((item)=>{
              return(
               
                <div className='flex pr-1 rounded-md overflow-hidden md:px-10 md:h-[20vh] lg:h-[30vh] w-full h-[15vh]' key={item.id}>
                
                <div className='w-3/12 m-1 rounded-md overflow-hidden'>
                    {( item.image.charAt(0)==='t') &&
                    <img src={`/tshirts/${item.image}.jpg`} alt="tshirt" className='object-cover object-center w-full h-full'/>
                }
                    {(item.image.charAt(0)==='h') &&
                    <img src={`/hoodies/${item.image}.jpg`} alt="hoodie" className='object-cover object-center w-full h-full'/>
                }
                    {(item.image.charAt(0)==='a') &&
                    <img src={`/accessories/${item.image}.jpg`} alt="accessorie" className='object-cover object-center w-full h-full'/>
                }
                    
                </div>
                
                <div className='w-9/12 lg:w-9/12 bg-slate-100 justify-between flex-col flex px-3 py-3 md:px-5 md:py-5 lg:px-10 lg:py-10 rounded-md my-1'>
                    <div className='md:font-semibold font-light text-sm flex justify-between md:text-lg lg:text-xl'>
                        <h3 className='underline underline-offset-auto flex flex-row items-center capitalize text-gray-800'><HiColorSwatch className={`mr-2 text-sm rounded-full text-${item.color}-500`}/>{item.title}  ({item.color}/{item.size})</h3>
                        <h3>${item.price}</h3>
                    </div>
                    <div className='pt-1 md:pt-2 font-normal lg:font-medium text-xs md:text-xs md:pr-14 hidden md:block'>
                        <h5>{item.desc.slice(0, 120) + (item.desc.length > 120 ? "..." : "")}</h5>
                    </div>
                    <div className='text-xs md:font-semibold md:text-sm'>
                       <h5>Quantitiy : <span className='font-bold'>{item.units}</span></h5>
                    </div>
                </div>
              </div>                
              )
            })
          }
           
          </div>

          
          <div className="flex justify-end">
            <Link href={`/cart`}><button className="bg-gradient-to-tr from-cyan-300 to-sky-400 px-6 text-xs leading-tight py-2.5 rounded font-medium text-white flex hover:shadow-xl">EDIT CART<FaEdit className="text-white ml-2"/></button></Link>
          </div>
           

           <p className="text-center text-xs pt-4 font-normal text-gray-600 mt-6">If you are ready to pay, Click below to initiate the payment process.</p>
           <h5 className="text-center pt-2 pb-4 text-sm text-gray-600">Total Amount payabale : {total} </h5>
          
           
          <button className="w-full px-6 py-2.5 bg-green-400  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-500 active:shadow-lg transition duration-150 ease-in-out flex items-center justify-center" onClick={initPayment}>
            Pay Now<MdOutlineAttachMoney className="text-white mx-2 text-sm"/>
          </button>
        </form>


        </div>
      </section>
      </>
      }
    </>
  );
};

export default Checkout;

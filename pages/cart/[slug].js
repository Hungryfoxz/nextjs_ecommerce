import React from 'react';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';
import Link from 'next/link';
import AppContext from '../../context/AppContext';
import {BsCartCheckFill} from 'react-icons/bs';
import { useRouter } from 'next/router';
import {HiColorSwatch} from 'react-icons/hi';
// import User from '../../models/user';
// import mongoose from 'mongoose';
import Loader from '../../components/Loader';
import Loading from '../../components/Loading';


const cart = () => {
    

    // const { } = React.useContext(AppContext);



    // Old code from here ...
    const router = useRouter();

    const { deleteFromCart, cartItems , handleFavourite} = React.useContext(AppContext);
    const [myCart, setMyCart] = React.useState(cartItems);
    console.log(cartItems)

    React.useEffect(() => {
        setMyCart(cartItems)
    }, [cartItems])
    
    const totalItems = cartItems.length;

    let subTotal = 0;
    myCart.map((item)=>{
        subTotal = subTotal + item.price;
    });

    const [fav, setFav] = React.useState(false);
    const handleFav = (e) => {
        e.favourite = !e.favourite;
        setFav(!fav);
        handleFavourite(e);
    }

    const handleDelete =  (item) => {
        deleteFromCart(item);     
    }

    const handleGoBack = () => {
        router.back();
    }



  return (
    <>
    <section className='flex-col w-full bg-transparent'>

    {/*  First section */}
        <div className='bg-transparent'>
        <h1 className='text-center text-2xl md:text-5xl font-bold leading-9 py-3 mb-10 md:pt-10 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-purple-600 flex items-center justify-center'>Your Shopping Cart<BsCartCheckFill className='text-green-400 ml-2'/></h1>

        <section className='flex flex-col md:px-20'>
        {!myCart && <Loader/>}

            {/* cart cards */}
            {myCart.length===0?
            (<>
            <div className='max-h-screen flex flex-col items-center justify-center'>
                <p>No Items to show in the cart.</p>
                <div className="h-[25rem] w-[25rem] mb-96">
                    <Loading/>
                </div>
                </div>
            </>)
            :
            myCart.map((item)=>{
                return(
            <div className='flex pr-1 bg-transparent pb-8 rounded-md overflow-hidden md:px-10 md:h-[30vh] lg:h-[40vh] w-full h-[16vh]' key={item.id}>
                
                <div className='w-3/12 m-1 rounded-md overflow-hidden'>
                    {( item.slug.charAt(0)==='t') &&
                    <img src={`/tshirts/${item.image}.jpg`} alt="tshirt" className='object-cover object-center w-full h-full'/>
                }
                    {(item.slug.charAt(0)==='h') &&
                    <img src={`/hoodies/${item.image}.jpg`} alt="tshirt" className='object-cover object-center w-full h-full'/>
                }
                    {(item.slug.charAt(0)==='a') &&
                    <img src={`/accessories/${item.image}.jpg`} alt="tshirt" className='object-cover object-center w-full h-full'/>
                }
                    
                </div>
                
                <div className='w-9/12 lg:w-9/12 bg-slate-200 justify-between flex-col flex px-3 py-3 md:px-5 md:py-5 lg:px-10 lg:py-10 rounded-md my-1'>
                    <div className='md:font-semibold font-light text-sm flex justify-between md:text-lg lg:text-xl'>
                        <h4 className='underline underline-offset-2 flex flex-row items-center text-sm md:text-lg lg:text-xl'><HiColorSwatch className={`mr-1 text-sm rounded-full text-${item.color}-500`}/>{item.title}
                        <span className='capitalize'>({item.color}</span><span className=''>/{item.size})</span></h4>
                        <h4>${item.price}</h4>
                    </div>
                    <div className='pt-1 md:pt-2 font-normal lg:font-medium text-xs md:text-xs md:pr-14 hidden md:block'>
                        <h5>{item.desc.slice(0, 120) + (item.desc.length > 120 ? "..." : "")}</h5>
                    </div>
                    <div className='text-xs md:font-semibold md:text-sm'>
                       <h5 className='text-xs'>Quantity : <span className='font-bold'>{item.units}</span></h5>
                    </div>
                    <div className='w-full flex justify-start text-xs font-light md:text-sm space-x-5 md:space-x-8 lg:space-x-12 md:font-semibold'>
                        <h5 className='cursor-pointer'>Edit</h5>
                        <h5 className='text-pink-500 cursor-pointer font-normal md:font-semibold' onClick={()=>handleDelete(item)}>Remove</h5>
                        <div className='flex items-center flex-row'>
                            {!fav?
                                <>
                                <AiOutlineHeart className='mx-1 text-pink-500 font-semibold' onClick={()=>handleFav(item)}/>
                                <h5 className='cursor-pointer'>Add to Favourites</h5>
                                </>
                                :
                                <>
                                <AiFillHeart className='mx-1 text-pink-500 font-semibold' onClick={()=>handleFav(item)}/>
                                <h5 className='cursor-pointer'>Remove from Favourites</h5>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
           
                )
              })
            }

        </section>

        </div>


    {/* Second section */}

    <div className='bg-slate-100 h-full w-full'>

    <div className="md:flex px-14 py-20 justify-evenly md:px-40">
        <div className='md:w-3/5 '>
                <p className="text-4xl font-bold leading-9 text-gray-800">Summary</p>
                <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">Subtotal</p>
                    <p className="text-base leading-none text-gray-800">${(subTotal).toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Shipping</p>
                    <p className="text-base leading-none text-green-500 underline underline-offset-2">
                        {totalItems>1? '' + ' ' : ''} $ Free</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-green-500 underline underline-offset-2">
                        {totalItems>1? '' + ' ' : ''} $ Free</p>
                </div>
                <hr className='mt-6 text-xl'/>
                <div className="flex items-center  justify-between lg:pt-5 pt-6">
                    <p className="text-2xl leading-normal text-gray-800">Total</p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                        ${(subTotal + totalItems * 0 +  totalItems * 0).toFixed(2)}
                    </p>
                </div>
        </div>
        <div className='flex-col items-center justify-evenly md:w-2/5 md:pl-20 md:mt-24'>
                <button className='px-6 py-3 w-full bg-transparent border-2 border-gray-800 mt-10 rounded-full hover:shadow-xl duration-300' onClick={handleGoBack}>Go Back</button>
                <Link href="/checkout">
                <button className="w-full py-3 px-6 bg-gradient-to-r from-pink-400 to-pink-600 border-pink-500 border focus:outline-none text-white rounded-full hover:shadow-2xl duration-200 mt-6">Checkout</button>
                </Link>
        </div>
    </div>

    </div>
        
    </section>  
    </>
  )
}

// export async function getServerSideProps(context) {


//     if(!mongoose.connections[0].readyState){
//         mongoose.connect(process.env.MONGO_URI)
//       }
//       let user = await User.findById({_id: context.query.slug});
//       console.log(user.cart)
    

//     return {
//     props: {user : JSON.parse(JSON.stringify(user))}, // will be passed to the page component as props
//     }

// }


export default cart
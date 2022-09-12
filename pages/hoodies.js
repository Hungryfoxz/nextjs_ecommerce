import React from 'react';
import Link from 'next/link';
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import { BsStars } from 'react-icons/bs';
import Product from '../models/product';
import mongoose from 'mongoose';
import AppContext from '../context/AppContext';
import { toast, Slide } from 'react-toastify';
import { useRouter } from 'next/router';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
 
const hoodies = ({Products}) => {

  const router = useRouter()

  const [products, setProducts] = React.useState(Products);

  const filters = ['Men','WOMAN','Topwear','Developer','Handmade','MultiColor'];

  const funVal = (n) => {
    while (n >= 10) 
    n /= 10;
    return Math.floor(n);
  }

  // Using context Api here ::
  const { userInfo, handleFavourite, handleRemoveFavourite } = React.useContext(AppContext);

  // const [ favme , setFavme ] = React.useState({id:null,val:true})

  const handleFav = (item) => {
    handleFavourite(userInfo._id, item);
    // setFavme({id:item,val:false})
    toast.success('Added to Favourites!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide
      });
  }
  const handleRemoveFav = (item) =>{
    handleRemoveFavourite(userInfo._id, item);
    // setFavme({id:item,val:true}) 
    toast.success('Removed from Favourites!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide
      });
  }
  // console.log(userInfo.favourite)
  const handleMore = () => {
    toast.success('No more Items..😊', {
      position: "top-right",
      autoClose: 2000,
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
    <section className="text-gray-600 body-font">
      <div className='h-auto w-full lg:pl-6 scrollbar' id='style-15'>
        <ul className='flex space-x-5 ml-6 md:mt-3 mt-2 mb-1 items-center md:pt-2'>
          {filters.map((item)=>{
            return(
              <li className={(item==='Men'||item==='WOMAN')?'text-white bg-green-500 mx-2 px-3 items-center text-sm my-auto rounded-full flex py-1':'text-white bg-slate-600 mx-2 px-3 items-center text-sm my-auto rounded-full flex py-1'} key={filters.indexOf(item)}>
              <i className="fa-solid fa-xmark mr-2 text-xs text-white"></i>{item}</li>
            )
           })}
        </ul>
      </div>

      <div className="container px-5 py-5 mx-auto mb-10">
        <div className="flex flex-wrap -m-4 lg:mx-6">

          {!products?'Nothing to show'
                
                :

            Object.keys(products).map((item)=>{return(
              

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-sm duration-150" key={products[item]._id}>
            <Link href={`/products/${products[item].slug}`}><a className="block relative h-72 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block hover:scale-105 duration-1000 ease-in-out " 
              src={`/hoodies/${products[item].image}.jpg`}/>

                <div className='absolute bottom-2 right-2 bg-slate-50 flex justify-around px-2 py-1 rounded-full opacity-80'>
                  <span className='flex items-center justify-center px-1 text-xs'>{products[item].reviews} <BsStars className='text-pink-500 mx-1 text-lg'/></span>
                  <span className='pr-1 text-xs'>{products[item].soldunits>1000?funVal(products[item].soldunits)+'k+':products[item].soldunits}</span>
                </div>
            </a></Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font ls mb-1 flex justify-between uppercase">{products[item].gender}
              {/* Favourites logic goes here */}
              {/* <AiOutlineHeart className='text-pink-500 text-xl'/> */}
              {userInfo ? (userInfo.favourite.includes(products[item]._id)? 
                    <AiFillHeart className='mx-1 text-pink-500 font-semibold text-xl' onClick={()=>handleRemoveFav(products[item]._id)}/>
                    :
                    <AiOutlineHeart className='mx-1 text-pink-500 font-semibold text-xl' onClick={()=>handleFav(products[item]._id)}/>
                  ):(
                  <AiOutlineHeart className='mx-1 text-pink-500 font-semibold text-xl' onClick={()=>handleFav(products[item]._id)}/>
                )
              }
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
              <div className='flex flex-row justify-between mt-1'>
                <div className="flex flex-row">
                  <p className="">${products[item].price}
                  <span className='bg-gray-100 text-red-700 font-semibold mx-2 px-2 rounded-full text-xs font-mono py-1'>15% OFF</span>
                  </p>
                </div>
                <div className='flex flex-row justify-items-end'>

                  {/* Size */}
                  {products[item].size.map((fit)=>{
                    return(
                    <span className='mx-1  p-1 font-light text-xs border-gray-300 rounded' key={fit}>{fit}</span>
                    )
                  })}
                  
                </div>
              </div>

            </div>
          </div>

              )
          })
        }

        </div>
      </div>

      <div className='items-center flex flex-col justify-center p-6 mb-10'>
        <button className='bg-transparent text-gray-700 border-2 border-gray-500 px-6 py-1 rounded hover:shadow-2xl flex items-center' onClick={handleMore}>MORE
        <MdOutlineKeyboardArrowRight className='text-gray-700 ml-1'/>
        </button>
      </div>


  </section>
    </>
  )
}

export async function getServerSideProps(context) {

    if(!mongoose.connections[0].readyState){
        mongoose.connect(process.env.MONGO_URI)
      }
      let products = await Product.find({category:'hoodie'});
      let hoodies = {}
      for(let item of products){
        if(item.title in hoodies){
            if(!hoodies[item.title].color.includes(item.color) && item.quantity > 0){
                hoodies[item.title].color.push(item.color)
            }
            if(!hoodies[item.title].size.includes(item.size) && item.quantity > 0){
                hoodies[item.title].size.push(item.size)
            }
        }else{
            hoodies[item.title] = JSON.parse(JSON.stringify(item));
            if(item.quantity > 0){
                hoodies[item.title].color = [item.color];
                hoodies[item.title].size = [item.size]
            }
        }
    }


  return {
    props: {Products : JSON.parse(JSON.stringify(hoodies))}, // will be passed to the page component as props
  }
}

export default hoodies
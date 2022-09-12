import React,{useRef, useState} from 'react';
import Error from 'next/error';
import {useRouter} from 'next/router';
import AppContext from '../../context/AppContext';
import Product from '../../models/product';
import mongoose from 'mongoose';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Slug = ({error,product,variants}) => {


  if (error) {
    return <Error statusCode={404}/>
  }

  const router = useRouter()
  const { slug } = router.query;


  const desc = `this is the ${slug}`;

  const { addToCart, slugItem, user  } = React.useContext(AppContext);

  const pinRef = useRef(null);
  const [pin, setPin] = useState(null)

  // ************************************************************************  ===> Pincode Fetching...
  const handlePin =  async (e) => {
    
    e.preventDefault();
    if(pinRef.current.value.length!==6){
        toast.warning("Please enter a valid PinCode!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        });
    }else{
          let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
          let data = await response.json();
          
          if(Object.keys(data).includes(pinRef.current.value)){
              setPin(true);
              toast.success("Success Notification !", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
              });
          }
          if(!Object.keys(data).includes(pinRef.current.value)){
              setPin(false);
              toast.info("Sorry, Unavailable in your Area!", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
              });
          }
    }
    e.target.reset();
    }

    const buyClick = (slug) => {
      console.log(slug);
      addToCart(slug,desc);
      router.push('/cart');
    }

    const [color, setColor ] = React.useState(product.color)
    const [size, setSize ] = React.useState(product.size)

    const refreshVariants = (newsize, newcolor) =>{
      const url = `${process.env.NEXT_PUBLIC_HOST}/products/${variants[newcolor][newsize]['slug']}`;
      window.location = url;
    }

    // Adding to cart......
    const localCart = (image, desc, _id, price, slug, gender, color, category, title, size) => {
      if(user){
        addToCart(image, desc, _id, price, slug, gender, color, category, title, size)
      }else{
        toast(`Please login !`, {
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
    }

  return (
    <>
    <ToastContainer/>
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 pt-8 pb-20 md:py-16 mx-auto md:px-2">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      {product.image && (product.image.charAt(0)==='t') && <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-[80vh] h-96 object-cover object-center rounded overflow-hidden" src={`/tshirts/${product.image}.jpg`}/>}
      {product.image && (product.image.charAt(0)==='h') && <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-[80vh] h-96 object-cover object-center rounded overflow-hidden" src={`/hoodies/${product.image}.jpg`}/>}
      {product.image && (product.image.charAt(0)==='a') && <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-[80vh] h-96 object-cover object-center rounded overflow-hidden" src={`/accessories/${product.image}.jpg`}/>}
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}({product.size}/{product.color})</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">{product.reviews} Ratings</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">{product.desc}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            {Object.keys(variants).includes('white') 
            && Object.keys(variants['white']).includes(size) &&
            <button className={`border-2 rounded-full w-6 h-6 focus:outline-none ${color==='white'?'border-gray-500':'border-gray-200'}`} 
            onClick={()=>refreshVariants(size, 'white')}>
              </button>}
            {Object.keys(variants).includes('gray') 
            && Object.keys(variants['gray']).includes(size) &&
            <button className={`border-2 ml-1 bg-gray-300 rounded-full w-6 h-6 focus:outline-none ${color==='gray'?'border-gray-500':'border-gray-200'}`} 
            onClick={()=>refreshVariants(size, 'gray')}>
              </button>}
            {Object.keys(variants).includes('red') 
            && Object.keys(variants['red']).includes(size) &&
            <button className={`border-2 ml-1 bg-red-200 rounded-full w-6 h-6 focus:outline-none ${color==='red'?'border-red-500':'border-gray-200'}`} 
            onClick={()=>refreshVariants(size, 'red')}>
              </button>}
            {Object.keys(variants).includes('orange') 
            && Object.keys(variants['orange']).includes(size) &&
            <button className={`border-2 ml-1 bg-orange-200 rounded-full w-6 h-6 focus:outline-none ${color==='orange'?'border-orange-500':'border-gray-200'}`} 
            onClick={()=>refreshVariants(size, 'orange')}>
              </button>}
            {Object.keys(variants).includes('pink') 
            && Object.keys(variants['pink']).includes(size) &&
            <button className={`border-2 ml-1 bg-pink-200 rounded-full w-6 h-6 focus:outline-none ${color==='pink'?'border-pink-500':'border-gray-200'}`} 
            onClick={()=>refreshVariants(size, 'pink')}>
              </button>}
            {Object.keys(variants).includes('green') 
            && Object.keys(variants['green']).includes(size) &&
            <button className={`border-2 ml-1 bg-green-200 rounded-full w-6 h-6 focus:outline-none ${color==='green'?'border-green-500':'border-gray-200'}`} 
            onClick={()=>refreshVariants(size, 'green')}>
              </button>}
            {Object.keys(variants).includes('purple') 
            && Object.keys(variants['purple']).includes(size) &&
            <button className={`border-2 ml-1 bg-purple-200 rounded-full w-6 h-6 focus:outline-none ${color==='purple'?'border-purple-500':'border-gray-200'}`} 
            onClick={()=>refreshVariants(size, 'purple')}>
              </button>}
            {Object.keys(variants).includes('blue') 
            && Object.keys(variants['blue']).includes(size) &&
            <button className={`border-2 ml-1 bg-blue-200 rounded-full w-6 h-6 focus:outline-none ${color==='blue'?'border-blue-500':'border-gray-200'}`} 
            onClick={()=>refreshVariants(size, 'blue')}>
              </button>}
            {Object.keys(variants).includes('brown') 
            && Object.keys(variants['brown']).includes(size) &&
            <button className={`border-2 ml-1 bg-stone-400 rounded-full w-6 h-6 focus:outline-none ${color==='brown'?'border-stone-500':'border-gray-200'}`} 
            onClick={()=>refreshVariants(size, 'brown')}>
              </button>}
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10" onChange={(e)=>refreshVariants(e.target.value, color)} value={size}>
                {Object.keys(variants[color]).includes('M') && <option value={'M'}>M</option>}
                {Object.keys(variants[color]).includes('L') && <option value={'L'}>L</option>}
                {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>XL</option>}
                {Object.keys(variants[color]).includes('XXL') && <option value={'XXL'}>XXL</option>}          
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="flex">
          <span className="title-font text-base font-bold md:font-medium md:text-2xl text-gray-900 my-auto ">$58.00</span>
          
          <button className="items-center flex ml-3  py-2 px-6 focus:outline-none rounded-full bg-gradient-to-r hover:shadow-lg ease-in-out duration-300 from-pink-500 to-pink-400 text-gray-50 text-sm md:text-base" onClick={()=>buyClick(product.image)}
          >BUY</button>

          <button className="items-center flex ml-auto text-white border-0 py-2 px-6 focus:outline-none rounded-full bg-gradient-to-r from-blue-400 to-blue-500 hover:shadow-lg ease-in-out duration-200 text-sm md:text-base" 
          onClick={()=>localCart(product.image,product.desc,product._id,product.price,product.slug,product.gender,product.color,product.category,product.title,product.size)}>{!slugItem.includes(product.slug)?'Add To Cart':'Added to Cart'}
          </button>

          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-1">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>

        <p className='pt-5 text-sm'>Check availability in your area.</p>
        <div>
              <form className='w-full py-3 flex flex-wrap' onSubmit={handlePin}>
              <input type="text" ref={pinRef} className="form-control block w-1/3 px-5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-800 focus:outline-none" placeholder="PIN-CODE"/>
              <button type="submit" className="inline-block px-6 py-2 border-none border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-2" >Check</button>
              </form>
              {(pin===true) && <p className='text-sm text-green-400'>Hurrah! We are avilable in your area.</p>}
              {(pin===false) && <p className='text-sm text-pink-500'>Oops! Sorry for Unavailabiltiy.</p>}
        </div>
       </div>
      </div>
    </div>
  </section>
    </>
  )
}

export async function getServerSideProps(context) {

    if(!mongoose.connections[0].readyState){
       mongoose.connect(process.env.MONGO_URI)
      }
      let product = await Product.findOne({slug:context.query.slug});
      if(product===null){
        return {
          props: {error :true}, // will be passed to the page component as props
        }
      }
      let variants = await Product.find({title: product.title, category: product.category })
      let colorSizeSlug = {}
      for (let item of variants){
        if(Object.keys(colorSizeSlug).includes(item.color)){
          colorSizeSlug[item.color][item.size] = { slug: item.slug}
        }else{
          colorSizeSlug[item.color] = {}
          colorSizeSlug[item.color][item.size] = {slug: item.slug}
        }
      }


  return {
    props: {product : JSON.parse(JSON.stringify(product)),variants : JSON.parse(JSON.stringify(colorSizeSlug))}, // will be passed to the page component as props
  }

  }



export default Slug
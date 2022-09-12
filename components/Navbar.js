import React,{ useRef } from "react";
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {FaUserAltSlash, FaUserCheck } from 'react-icons/fa'
import {useRouter} from 'next/router';
import AppContext from "../context/AppContext";
import { toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const { user, userInfo } = React.useContext(AppContext);
    
    const handleCartPath = () => {
      if(user){
      if(userInfo!==null){
        router.push(`/cart/${userInfo._id}`)
      }else{
        toast('Please login to view the cart.', {
          position: "top-right",
          delay: 100,
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Slide
          });
      }
    }else{
      toast('Please login to view the cart.', {
        position: "top-right",
        delay: 100,
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide
        });
    }
    }


    // Calling useRouter() hook
    const router = useRouter();
    
    const ref=useRef();
    const refMenu = useRef();
    const iconRef = useRef();

    const clickAvatar = () => {
      if(ref.current.classList.contains('translate-x-full')){
        ref.current.classList.remove('translate-x-full');
        ref.current.classList.add('translate-x-0');
        if(!refMenu.current.classList.contains('-translate-x-full')){
          refMenu.current.classList.remove('translate-x-0');
          refMenu.current.classList.add('-translate-x-full');
          iconRef.current.classList.remove('opacity-0');
          iconRef.current.classList.add('opacity-100'); 
        }

      }else if(!ref.current.classList.contains('translate-x-full')){
        ref.current.classList.remove('translate-x-0');
        ref.current.classList.add('translate-x-full');
      }
    }

    const toggleMenu = () => {
      if(refMenu.current.classList.contains('-translate-x-full')){
        refMenu.current.classList.remove('-translate-x-full');
        refMenu.current.classList.add('translate-x-0');
        if(ref.current.classList.contains('translate-x-0')){
          ref.current.classList.remove('translate-x-0');
          ref.current.classList.add('translate-x-full');
        }
        if(iconRef.current.classList.contains('opacity-100')){
          iconRef.current.classList.remove('opacity-100');  
          iconRef.current.classList.add('opacity-0');
        }
      }else if(!refMenu.current.classList.contains('-translate-x-full')){
        refMenu.current.classList.remove('translate-x-0');
        refMenu.current.classList.add('-translate-x-full');
        iconRef.current.classList.remove('opacity-0');
        iconRef.current.classList.add('opacity-100'); 
      }
    }


    const handleLogout = () =>{
      clickAvatar();
      if(user.value){
      localStorage.removeItem('token');
      clickAvatar();
      toast('Logging out...', {
        position: "top-right",
        delay: 500,
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide
        });
        toast.success('Successfull', {
          position: "top-right",
          delay: 1000,
          autoClose: 450,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Slide
          });

        user.value = false;
        setTimeout(() => {
          router.push('http://localhost:3000/login')
        }, 2000);
      }else if(!user.value){
        toast('You must be logged in!', {
          position: "top-right",
          delay: 500,
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Slide
          });
      }
    }


    const handleMyAccount = () => {
      clickAvatar();
      if(!user.value){
        toast('You must be logged in!', {
          position: "top-right",
          delay: 500,
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Slide
          });
          return router.push(router.pathname)
      }else{
        return router.push('/account');
      }     
    }
    


  return (
    <>
      <nav>
          <div className="w-full h-12 to-cyan-200 flex justify-between z-50 bg-gradient-to-r from-cyan-100">
            <div className="md:hidden mx-4 items-center flex-row flex relative">
                
                
                
                <i ref={iconRef} className="fa-solid fa-bars z-30 text-xl opacity-100 delay-100" onClick={toggleMenu} ></i>
             
                
                <div ref={refMenu} className="backdrop-blur-3xl fixed z-20 min-h-fit w-80 opacity-95 -ml-4 top-0 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-xl bg-gradient-to-tr from-blue-500 via-sky-400 to-cyan-300 transform tranisition-transform -translate-x-full duration-300 ease-in-out" style={{  backdropFilter: 'blur(50px)'}}>
                <i className="fa-solid fa-xmark z-50 text-2xl fixed py-3 px-4" onClick={toggleMenu}></i>
                  <ul className="flex flex-col items-center py-3 z-50 pt-10 space-y-10 mb-20 mt-10">
                    <Link href='/'><a><li className="mr-7 text-md text-black md:block cursor-pointer z-40 hover:text-slate-100 duration-200"><strong onClick={toggleMenu}>Home</strong></li></a></Link>
                    <Link href='/tshirts'><a><li className="mr-7 text-md text-black md:block cursor-pointer z-40 hover:text-slate-100 duration-200"><strong onClick={toggleMenu}>T-Shirts</strong></li></a></Link>
                    <Link href='/hoodies'><a><li className="mr-7 text-md text-black md:block cursor-pointer z-40 hover:text-slate-100 duration-200"><strong onClick={toggleMenu}>Hoodies</strong></li></a></Link>
                    <Link href='/stickers'><a><li className="mr-7 text-md text-black md:block cursor-pointer z-40 hover:text-slate-100 duration-200"><strong onClick={toggleMenu}>Stickers</strong></li></a></Link>
                    <Link href='/accessories'><a><li className="mr-7 text-md text-black md:block cursor-pointer z-40 hover:text-slate-100 duration-200"><strong onClick={toggleMenu}>Accessories</strong></li></a></Link>
                    <li className="mr-7 text-2xl text-black md:block cursor-pointer z-40 hover:text-slate-100 duration-200" onClick={handleCartPath}><AiOutlineShoppingCart /></li>
                  </ul>
                </div>
                
                

            </div>
            <div className="my-auto ml-4 flex flex-row items-center">
              <Link href={'/'}>
            <svg width="100" height="30" viewBox="0 0 283 64" fill="none" className="cursor-pointer hover:translate-x-0 hover:translate-y-1 duration-200"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000"/>
            </svg>
            </Link>
            </div>
            
            <div className="my-auto">

            <ul className="flex flex-row my-auto items-center space-x-4">

            <Link href='/tshirts'><div className={router.pathname==='/tshirts'?"bg-sky-300 rounded-full":""}><li className="mx-4 px-1 py-1 text-md text-black hidden md:block cursor-pointer">T-Shirts</li></div></Link>

            <Link href='/hoodies'><div className={router.pathname==='/hoodies'?"bg-sky-300 rounded-full":""}><li className="mx-4 px-1 py-1 text-md text-black hidden md:block cursor-pointer">Hoodies</li></div></Link>

            <Link href='/accessories'><div className={router.pathname==='/accessories'?"bg-sky-300 rounded-full":""}><li className="mx-4 px-1 py-1 text-md text-black hidden md:block cursor-pointer">Accessories</li></div></Link>

            {/* Cart */}
            
                <li className="mr-7 text-2xl text-black hidden md:block cursor-pointer" onClick={handleCartPath}>
                  <div>
                  <AiOutlineShoppingCart className="text-gray-800"/>
                  </div>
                </li>

      
            <li className="cursor-pointer z-40" onClick={clickAvatar}>
              {/* {user.value && <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-full w-10 mr-4 cursor-pointer" alt="Avatar"/>} */}
              {user.value && <><div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4"><FaUserCheck className="text-white"/></div></>}
              {!user.value && <><div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4"><FaUserAltSlash className="text-white"/></div></>}
            </li>

                
            </ul>

            </div>

          </div>
          {/* Account slide handler */}
          <div ref={ref} className="fixed -top-1 -right-1 h-fit w-fit flex flex-col opacity-95 -ml-4 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl shadow-xl bg-gradient-to-tr from-purple-500 via-fuchsia-400 to-pink-300 z-20 transform tranisition-transform translate-x-full duration-300 ease-in-out" style={{ background: 'rgba( 255, 255, 255, 0.4)', backdropFilter: 'blur(30px)'}}>
                
                <ul className='flex flex-col items-center py-3 z-40 pt-10 space-y-10 mb-20 mt-10 pl-20 pr-20'>

                    {!user.value && <Link href='/login'><a><li className="text-md text-black md:block cursor-pointer z-50 hover:text-slate-100 duration-200" onClick={clickAvatar}><strong>LOGIN</strong></li></a></Link>}

                    {!user.value && <Link href='/signup'><a><li className="text-md text-black md:block cursor-pointer z-50 hover:text-slate-100 duration-200" onClick={clickAvatar}><strong>SIGNUP</strong></li></a></Link>}

                    {/* <Link href='/account'><a> */}
                      <li className="text-md text-black md:block cursor-pointer z-50 hover:text-slate-100 duration-200" onClick={handleMyAccount}><strong>MY ACCOUNT</strong></li>
                    {/* </a></Link> */}
                    
                    {user.value && <Link href='/orders'><a><li className="text-md text-black md:block cursor-pointer z-50 hover:text-slate-100 duration-200" onClick={clickAvatar}><strong>ORDERS</strong></li></a></Link>}

                    <li className="text-md text-black md:block cursor-pointer z-50 hover:text-slate-100 duration-200" onClick={handleLogout}><strong>LOGOUT</strong></li>

                </ul>
            
          </div>
        </nav>
    </>
  );
};

export default Navbar;

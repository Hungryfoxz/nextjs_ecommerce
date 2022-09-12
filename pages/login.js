import {useRouter} from 'next/router';
import React, { useContext } from 'react';
import { toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppContext from '../context/AppContext';


export default function login () {


  const router = useRouter();
  const { user } = useContext(AppContext);

  const emailRef = React.useRef()
  const passwordRef = React.useRef()

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    console.log(passwordRef.current.value)

    let headersList = {"Content-Type": "application/json" }
     
    let bodyContent = JSON.stringify({
       "email": emailRef.current.value,
       "password": passwordRef.current.value
     });
     
     let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/login`, 
     { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     let data = await response.json();
     console.log(data);
     e.target.reset();
     if(data.success){
      localStorage.setItem('token', data.token)
       toast.success('Your are logged in Successfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide
        });
       toast('Redirecting...', {
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

        user.value = true;
        setTimeout(() => {
          router.push('/')
        }, 3500);
     }else{
      toast.error('No User Found!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide
        });
     }
  }

  // check is the user is already logged in :::::
  React.useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push('/')
    }
  },[])

  return (
    <>
    {/* <ToastContainer/> */}
    {/* <ToastContainer/> */}
    <section className="min-h-screen min-w-screen flex items-center justify-center bg-cyan-50">

      <div className='bg-gradient-to-br from-cyan-200 via-sky-100 to-purple-200 w-10/12  md:w-6/12 lg:w-4/12 flex flex-col items-center justify-center rounded-3xl shadow-lg'>
        <div className='py-6'>
          <h1 className='text-2xl md:text-4xl items-start font-bold text-gray-600'>Log in</h1>
        </div>
        <hr className='w-full my-2 pb-4 border-gray-200'/>
        <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col w-full md:pt-4'>
        <div className='flex flex-col space-y-2 w-full px-8 md:px-6 lg:px-10'>
              <input ref={emailRef}
                type="email" className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="username" placeholder="Email" />
              <input ref={passwordRef}
              type="password" className="form-control block px-3 py-2 w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password" placeholder="Password"/>
        </div>
        <div className='py-2 text-xs font-bold text-purple-400 cursor-pointer pt-4'><p>Forgot your password?</p></div>
        <div className='py-6 w-full items-center flex justify-center'>
          <button className='px-8 py-2 bg-gradient-to-r from-gray-800 via-gray-800 to-gray-800 text-white rounded-full hover:shadow-2xl duration-200 hover:bg-black' type='submit'>Login</button>
        </div>
        </form>
        <hr className='w-full pt-5 border-gray-300'/>
        <div>
        <p className='pb-4'>Don't have an account? SignUp</p>
        </div>
      </div>

    </section>
    </>
  )
}


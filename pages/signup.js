import React from "react";
import { ToastContainer , toast, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {




  const nameRef = React.useRef()
  const emailRef = React.useRef()
  const passwordRef = React.useRef()

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    let headersList = {"Content-Type": "application/json" }
     
    let bodyContent = JSON.stringify({
       "name": nameRef.current.value,
       "email": emailRef.current.value,
       "password": passwordRef.current.value
     });
     
     let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/signup`, 
     { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.json();
     console.log(data);
     e.target.reset();
     toast('Your account created Successfully!', {
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



  return (
    <>
   <ToastContainer/>
    <section className="h-full gradient-form bg-cyan-50 w-full">
    <div className="md:py-6 lg:py-12 md:px-6 h-full">
    <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
    <div className="xl:w-10/12">
    <div className="block bg-white md:rounded-lg md:shadow-lg">
    <div className="lg:flex lg:flex-wrap g-0">
      <div className="lg:w-6/12 px-4 md:px-0">
        <div className="md:p-12 md:mx-6">
          <div className="text-center pt-12">
            <h4 className="text-4xl font-bold mt-1 mb-12 pb-1 text-gray-500">
              SIGNUP
            </h4>
          </div>
            <p className="mb-4">Create an Account</p>
          <form onSubmit={handleSubmit} method='POST'>
            <div className="mb-4">
              <input ref={nameRef}
                type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="Name" />
            </div>
            <div className="mb-4">
              <input ref={emailRef}
                type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="Email" />
            </div>
            <div className="mb-4">
              <input ref={passwordRef}
               type="password" className="form-control block px-3 py-1.5 w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password" placeholder="Password"/>
            </div>
            <div className="text-center pt-1 mb-12 pb-1">
              <button
                className="inline-block px-6 py-2.5 text-white font-medium text-xs uppercase rounded-full shadow-md transition duration-300 ease-in-out mb-3 mx-auto hover:shadow-xl hover:text-white bg-gradient-to-r border-0 from-cyan-400 to-sky-400" type="submit">
                Sign Up
              </button>
            </div>

          </form>
            <div className="flex items-center justify-between pb-6">
              <p className="mb-0 mr-2">Already have an account?</p>
              <button type="submit" className="inline-block px-6 py-2 border-2 border-cyan-400 text-sky-400 font-medium text-xs leading-tight uppercase rounded-full hover:from-cyan-400 hover:to-sky-400 hover:bg-gradient-to-r hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:shadow-xl">
                LOGIN
              </button>
            </div>
        </div>
      </div>
      <div
        className="lg:w-6/12 flex items-center lg:rounded-r-lg md:rounded-b-lg lg:rounded-bl-none bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-400">
        <div className="text-white px-10 py-20 md:py-32 md:px-12 md:mx-6">
          <h4 className="text-xl font-semibold mb-6">
            We are more than just a company
          </h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </>
  );
};

export default Signup;

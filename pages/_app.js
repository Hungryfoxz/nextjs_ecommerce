import Footer from '../components/Footer'
import '../styles/globals.css'
import Header from '../components/Header'
import AppState from '../context/AppState'
import React from 'react'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import { useRouter} from 'next/router';


function MyApp({ Component, pageProps }) {

  const [progress, setProgress] = React.useState(0)
  const router = useRouter();
  React.useEffect(()=>{
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
  },[])

  const key = Math.random();

  const [showChild, setShowChild] = React.useState(false);
  React.useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else { 

    return( 
    <>
        {/* <SafeHydrate> */}
        <AppState>
        <Header/>
        <Navbar key={key}/>
        <LoadingBar
        color='#ec4899'
        progress={progress}
        waitingTime={400}
        height={3}
        onLoaderFinished={() => setProgress(0)}/>
        {/* <Nav/> */}
        <ToastContainer/>
          <Component {...pageProps} />
        <Footer/>
        </AppState>
        {/* </SafeHydrate> */}

    </>
    )
}
}

export default MyApp




// import dynamic from 'next/dynamic'


// const Nav = dynamic(() => import("../components/Navbar"), { ssr: false });


// function SafeHydrate({ children }) {
//   return (
//     <div suppressHydrationWarning>
//       {typeof window === 'undefined' ? null : children}
//     </div>
//   )
// }
import React from 'react';
import { DiCodeigniter } from 'react-icons/di';
import { BsFillCartFill,BsStarHalf,BsCamera } from 'react-icons/bs';
import { MdArrowForwardIos } from 'react-icons/md';
import { FiTrendingUp } from 'react-icons/fi';
import useWindowDimensions from '../utils/windowDimensions';
import Link from 'next/link';


const Body = () => {

    const { height } = useWindowDimensions();

    const get_started = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: height,
            behavior: "smooth",
        });
    }

  return (
    <>
    {/* Hero section */}
    <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{backgroundPosition: '70%',height: '500px'}}>
        <img src="/image1.jpg" alt="image-1" />
      </div>

      <div className="container mx-auto px-6 md:px-12 xl:px-32">
      <div className="text-center text-gray-800">
        <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" style={{marginTop: '-200px', background: 'hsla(0, 0%, 100%, 0.7)', backdropFilter: 'blur(30px)'}}>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer on the market <br /><span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 via-sky-500 to-indigo-700">for the Developers</span></h1>
          <a className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out rounded-full" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#get_started" role="button" onClick={get_started}>Get started</a>
          <a className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
        </div>
      </div>
    </div>

    {/* Below hero section */}
    <section className="text-gray-600 body-font">
        <div className="container px-5 pt-20 pb-2 md:pb-14 mx-auto">
            <div className="flex flex-wrap w-full md:mb-20 mb-8">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 id="get_started" className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 ml-5 flex items-center">
                    <DiCodeigniter className='text-5xl'/> CodesWear : Developers Hotspot.</h1>
                <div className="h-1 w-56 bg-blue-500 rounded ml-5"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 pl-2">We beleive that <span className='text-blue-400 underline underline-offset-4'>developers</span> are the way to the future and so we create personalized products for our customers. Our quality ensures that the <span className='text-blue-400 underline underline-offset-4'>developers</span> gets the best from us, we donot compromise in the consistency and the best in class delivery speeds. So that you can sit tight and relax and wrok for the next big thing.</p>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4 block">
                <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg duration-150 ease-in-out">
                <img className="h-40 rounded w-full object-cover object-center mb-6 scale-110 -mt-2" src="/tshirt.jpg" alt="content"/>
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Personalised</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">T-Shirts</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg duration-150 ease-in-out">
                <img className="h-40 rounded w-full object-cover object-center mb-6 scale-110 -mt-2" src="/hoodie.jpg" alt="content"/>
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Custom</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Hoodies</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg duration-150 ease-in-out">
                <img className="h-40 rounded w-full object-cover object-center mb-6 scale-110 -mt-2" src="/sticker.jpg" alt="content"/>
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Colourful</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Stickers</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg duration-150 ease-in-out">
                <img className="h-40 rounded w-full object-cover object-center mb-6 scale-110 -mt-2" src="/mouse.jpg" alt="content"/>
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Extended</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Accessories</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
            </div>
            </div>
        </div>
    </section>

    {/* Gallery section */}
    <section className="text-gray-600 body-font bg-gray-100 mt-10">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl md:text-4xl font-medium title-font mb-1 text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-purple-600 pb-1 flex justify-center items-center">
                <BsCamera className='text-purple-700 px-1'/>
                Gallery
                </h1>
            <div className="h-1 w-1/2 bg-blue-500 rounded mx-auto mt-1 mb-5"></div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The most popular products gets featured on the Gallery on a weekly basis so it is easier for you to follow the trend.</p>
            </div>
            <div className="flex flex-wrap m-2">
            <div className="lg:w-1/3 sm:w-1/2 p-2">
                <div className="flex relative rounded-sm">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/gallery/model1.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-70 duration-300 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-2">
                <div className="flex relative rounded-sm">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/gallery/model2.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-70 duration-300 ease-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-2">
                <div className="flex relative rounded-sm">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-botom" src="/tshirts/tshirt11.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-70 duration-300 ease-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-2">
                <div className="flex relative rounded-sm">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/gallery/model8.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-70 duration-300 ease-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-2">
                <div className="flex relative rounded-sm">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/gallery/model5.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-70 duration-300 ease-in-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-2">
                <div className="flex relative rounded-sm">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/gallery/model6.jpg"/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-70 duration-300 ease-out">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                    <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    {/* Before they sold out */}
    
    <section className="text-gray-600 body-font relative overflow-hidden">
        <h1 className="text-center text-4xl font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-400 pb-1 flex justify-center items-center">
        <FiTrendingUp className='text-purple-500 px-2 mx-1'/>
            Trending
            </h1>
        <img src="/gallery/blob.svg" alt="blob" id="blob1" className='absolute -z-10 top-10 lg:-right-80 md:-right-40 w-3/6 hidden md:block  duration-1000 '/>
       
        <img src="/gallery/blob2.svg" alt="blob" id="blob2" className='absolute -z-10 lg:-bottom-80 w-5/6 hidden md:block -rotate-6 ease-in-out duration-1000 delay-1000 md:-bottom-40' />
        <div className="h-1 w-1/2 bg-blue-500 rounded mx-auto mt-3"></div>
        <div className="container mx-auto flex px-5 pt-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-20 relative">
            <img className="object-cover object-center rounded" alt="hero" src="/gallery/hoodie-girl.jpg"/>
            <img src="/gallery/blob1.svg" alt="blob" id="blob2" className='absolute lg:top-48 rotate-180 lg:right-20 md:left-72 w-5/6 md:-bottom-20  duration-1000 -bottom-48 -right-20 -z-20'/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                <br className="hidden lg:inline-block"/>  Kashmiri Silk Hoodie
            </h1>
            <p className="mb-8 leading-relaxed md:mr-10">Handmade pure silk from the raremost animal on earth.Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. </p>
            <div className="flex justify-center">
                <button className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg hover:shadow-xl duration-300 items-center bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-400">Buy<MdArrowForwardIos className='text-white ml-3'/></button>
                <button className="ml-4 inline-flex text-gray-100 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded-full text-lg hover:shadow-xl duration-300 items-center">Add to Cart<BsFillCartFill className='items-center ml-3'/></button>
            </div>
            </div>
        </div>

        <div className="container mx-auto flex px-5 pt-10 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                <br className="hidden lg:inline-block"/>  Kashmiri Silk Hoodie
            </h1>
            <p className="mb-8 leading-relaxed md:mr-10">Handmade pure silk from the raremost animal on earth.Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. </p>
            <div className="flex justify-center mb-10">
                <button className="inline-flex text-white bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-400 border-0 py-2 px-6 focus:outline-none rounded-full text-lg hover:shadow-xl duration-300 items-center">Buy<MdArrowForwardIos className='text-white ml-3'/></button>
                <button className="ml-4 inline-flex text-gray-100 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded-full text-lg hover:shadow-xl duration-300 items-center">Add to Cart<BsFillCartFill className='items-center ml-3'/></button>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-20 relative">
            <img className="object-cover object-center rounded" alt="hero" src="/gallery/hoodie-girl2.jpg"/>
            <img src="/gallery/hoodie-girl2-blob.svg" alt="blob-yellow" className='absolute -z-50 -bottom-60 -right-40 -rotate-45'id="blob2"/>
            </div>
        </div>
    </section>

    {/* REview from customers */}
    <section className="text-gray-600 body-font">
    <h1 className="text-center text-4xl font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700 flex items-center justify-center"><BsStarHalf className='text-purple-500'/>Reviews</h1>
    <div className="h-1 w-1/2 bg-blue-500 rounded mx-auto mt-3"></div>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-top rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/gallery/cand1.jpg"/>
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p className="text-gray-500">Senior Product Designer</p>
                </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"/>
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                <p className="text-gray-500">UI Develeoper</p>
                </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"/>
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                <p className="text-gray-500">CTO</p>
                </div>
            </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Body
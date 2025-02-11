import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import image from '../../assets/Images/5c81b8f8-190c-4369-b2a8-188acfc11b11.jpeg'
import { RiDoubleQuotesR } from "react-icons/ri";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { LuMoveLeft } from "react-icons/lu";





export default function App() {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className='bg-[#F1EEFE] py-28'>

    <div className="w-10/12 mx-auto"> {/* Center the content */}
      <div className=' mx-auto  flex flex-col md:flex-row justify-between'>
      <div className='text-center md:text-start'>
      <div className='flex justify-center md:justify-start'>
      <h1 className="text-2xl  rounded-md font-medium text-[#8B71FB] border-2 border-[#8B71FB] w-fit py-2 px-8">
           Testimonials
          </h1>
      </div>
         <div className='w-fit flex justify-center md:justify-start mb-4 md:mb-0'>
         <h1 className="text-4xl md:text-6xl  font-bold mt-2 w-4/6 leading-tight">Hear What Our  Customers Have to Say</h1>
         </div>
      </div>


      <div className="flex justify-center"> {/* Custom nav container */}
        <button
          onClick={goPrev}
          className="bg-white w-fit h-fit hover:bg-[#6849f3] text-white font-bold py-6 px-6 rounded-full  mr-2"
        >
       <LuMoveLeft className='text-4xl text-black' />


        </button>
        <button
          onClick={goNext}
          className="bg-[#7051F3] w-fit h-fit hover:bg-[#6849f3] text-white font-bold py-6 px-6 rounded-full"
        >
        <MdOutlineArrowRightAlt  className='text-4xl'/>

        </button>
      </div>
    </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        className="mySwiper"
      >
        {/* ... your SwiperSlides ... */}
        <SwiperSlide>
                <div className='grid grid-cols-6 gap-10 mt-16'>
{/* Carousel First Card */}
              <div className='md:col-span-4 col-span-6 border bg-[#E4DEFD] border-purple-500 rounded-md py-4 px-12'>
              <h3 className="text-2xl leading-10 font-bold">
              "CloudifyPro transformed our call centre operations. The Predictive Dialler increased our outbound call efficiency significantly, and the Cloud Phone System improved our overall communication flow. Plus, their support team is top-notch!"
              </h3>
             {/* First Card Second Item */}
             <section className='flex justify-between items-start '>

             <div className='flex gap-4 items-center justify-start mt-8'>
               <div>
               <img className='w-12 h-12 object-cover rounded-full' src={image} alt="" />
               </div>
                <div>
                  <h1 className="text-xl font-bold mb-1">Abu Saleh Noor</h1>
                  <p className="text-gray-700">CEO & Founder IT Tech </p>
                </div>
              </div>
              <div>
              <RiDoubleQuotesR className='text-9xl text-[#8C72FB]'/>
              </div>
             </section>
               {/* First Card Second Item End */}

              </div>
              <div className='md:col-span-2 col-span-6 border bg-white py-4 px-6 rounded-md'>
<p className="text-lg text-gray-500 font-semibold">
"CloudifyPro transformed our call centre operations. The Predictive Dialler increased our outbound call efficiency significantly, and the Cloud Phone System improved our overall communication flow. Plus, their support team is top-notch!"
</p>
<section className='flex justify-between items-center mt-6'>

             <div className='flex gap-4 items-center justify-start '>
               <div>
               <img className='w-12 h-12 object-cover rounded-full' src={image} alt="" />
               </div>
                <div>
                  <h1 className="text-xl font-bold mb-1">Abu Saleh Noor</h1>
                  <p className="text-gray-700">CEO & Founder IT Tech </p>
                </div>
              </div>
              <div>
              <RiDoubleQuotesR className='text-7xl text-[#8C72FB]'/>
              </div>
             </section>
              </div>
                </div>


        </SwiperSlide>
        <SwiperSlide>
                <div className='grid grid-cols-6 gap-10 mt-16'>
{/* Carousel First Card */}
              <div className='md:col-span-4 col-span-6 border bg-[#E4DEFD] border-purple-500 rounded-md py-4 px-12'>
              <h3 className="text-2xl leading-10 font-bold">
              "CloudifyPro transformed our call centre operations. The Predictive Dialler increased our outbound call efficiency significantly, and the Cloud Phone System improved our overall communication flow. Plus, their support team is top-notch!"
              </h3>
             {/* First Card Second Item */}
             <section className='flex justify-between items-start '>

             <div className='flex gap-4 items-center justify-start mt-8'>
               <div>
               <img className='w-12 h-12 object-cover rounded-full' src={image} alt="" />
               </div>
                <div>
                  <h1 className="text-xl font-bold mb-1">Abu Saleh Noor</h1>
                  <p className="text-gray-700">CEO & Founder IT Tech </p>
                </div>
              </div>
              <div>
              <RiDoubleQuotesR className='text-9xl text-[#8C72FB]'/>
              </div>
             </section>
               {/* First Card Second Item End */}

              </div>
              <div className='md:col-span-2 col-span-6 border bg-white py-4 px-6 rounded-md'>
<p className="text-lg text-gray-500 font-semibold">
"CloudifyPro transformed our call centre operations. The Predictive Dialler increased our outbound call efficiency significantly, and the Cloud Phone System improved our overall communication flow. Plus, their support team is top-notch!"
</p>
<section className='flex justify-between items-center mt-6'>

             <div className='flex gap-4 items-center justify-start '>
               <div>
               <img className='w-12 h-12 object-cover rounded-full' src={image} alt="" />
               </div>
                <div>
                  <h1 className="text-xl font-bold mb-1">Abu Saleh Noor</h1>
                  <p className="text-gray-700">CEO & Founder IT Tech </p>
                </div>
              </div>
              <div>
              <RiDoubleQuotesR className='text-7xl text-[#8C72FB]'/>
              </div>
             </section>
              </div>
                </div>


        </SwiperSlide>
       
       
      </Swiper>
    </div>
    </div>
  );
}
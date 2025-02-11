

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { RiDoubleQuotesR } from "react-icons/ri";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { LuMoveLeft } from "react-icons/lu";
import image1 from '../../assets/Images/banner.jpg';
import image2 from '../../assets/Images/bram-van-oost-Bo6nokvvKR0-unsplash.jpg';
import image3 from '../../assets/Images/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpg';
import image4 from '../../assets/Images/high-angle-controller-vr-glasses.jpg';

export default function Blogs() {
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
    <div className='bg-gray-100 py-20 mb-80'>
      <div className="w-10/12 mx-auto">
        <div className='mx-auto flex flex-col md:flex-row items-center justify-between'> {/* Changed to flex-col and md:flex-row */}
          <div>
            <h1 className="text-2xl rounded-md font-medium text-[#8B71FB] border-2 border-[#8B71FB] w-fit py-2 px-8">
              News & Blogs Articales
            </h1>
            <div className='w-fit'>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">Explore Our Insights</h1> {/* Adjusted text size */}
            </div>
          </div>

          <div className="flex justify-center mt-4 md:mt-0"> {/* Added margin top for smaller screens */}
            <button onClick={goPrev} className="bg-white w-fit h-fit hover:bg-[#6849f3] text-white font-bold py-4 px-4 rounded-full mr-2"> {/* Reduced padding */}
              <LuMoveLeft className='text-3xl md:text-4xl text-black' /> {/* Adjusted icon size */}
            </button>
            <button onClick={goNext} className="bg-[#7051F3] w-fit h-fit hover:bg-[#6849f3] text-white font-bold py-4 px-4 rounded-full"> {/* Reduced padding */}
              <MdOutlineArrowRightAlt className='text-3xl md:text-4xl' /> {/* Adjusted icon size */}
            </button>
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          slidesPerView={1}  // Start with 1 slide
          spaceBetween={30}
          breakpoints={{ // Add breakpoints for responsiveness
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper mt-16" // Removed unnecessary grid classes
        >
          {/* Slides */}
          {[image1, image4, image3, image2].map((image, index) => ( // Map over images for cleaner code
            <SwiperSlide key={index}>
              <div className='bg-white pb-10 rounded-md h-full'> {/* Added h-full for consistent card height */}
                <div>
                  <img className='rounded-md object-cover h-64 md:h-full w-full' src={image} alt="" /> {/* Added object-cover and height */}
                </div>
                <div className="px-4">
                  <div className='flex items-center mt-8 gap-10'>
                    <h1 className="text-2xl rounded-md font-medium text-black border-2 border-black w-fit py-2 px-8">
                      News & Blogs Articales
                    </h1>
                    <p className="text-lg">24.04.2024</p>
                  </div>
                  <h1 className="text-2xl md:text-4xl font-bold mt-6">Stay Informed: Delve into Trending Discussions</h1> {/* Adjusted text size */}
                  <button className="flex items-center gap-2 mt-8">
                    Read More
                    <MdOutlineArrowRightAlt className='text-3xl md:text-4xl bg-[#7051F3] w-fit h-fit hover:bg-[#6849f3] text-white font-bold py-1 px-1 rounded-full' /> {/* Adjusted icon size */}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
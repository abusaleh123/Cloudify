import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const Testimonial = () => {
    return (
        <div className="w-10/12 mx-auto py-20 ">
            <section className="bg-[#F1EEFE]">
            <h3 className="text-purple-900 text-center text-lg font-semibold">Testimonials</h3>
      <h2 className="text-center text-3xl font-bold my-4">
        Hear What Our Customers Have to Say
      </h2>


      <button className="swiper-button-prev  top-2 right-14 bg-white text-purple-600 shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-purple-600 hover:text-white transition">
          &#8592;
        </button>
        <button className="swiper-button-next  top-2 right-2 bg-purple-600 text-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-purple-700 transition">
          &#8594;
        </button>

      <div className="relative max-w-3xl mx-auto">
        <Swiper
          navigation
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          className="relative"
        >
          {/* Swiper Slide 1 */}
          <SwiperSlide>
            
            <div className="bg-white shadow-lg p-5 rounded-lg">
              <p className="text-gray-700 text-lg">
                "CloudifyPro transformed our call centre operations. The Predictive Dialler
                increased our outbound call efficiency significantly, and the Cloud Phone System
                improved our overall communication flow. Plus, their support team is top-notch!"
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="rounded-full w-12 h-12 mr-4"
                />
                <div>
                  <h4 className="font-bold">Biplob Hossain</h4>
                  <p className="text-gray-500 text-sm">CEO & Founder IT Tech</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Swiper Slide 2 */}
          <SwiperSlide>
            <div className="bg-white shadow-lg p-5 rounded-lg">
              <p className="text-gray-700 text-lg">
                "CloudifyPro truly revolutionized our business efficiency. Their features are
                game-changing, and their support is excellent!"
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="rounded-full w-12 h-12 mr-4"
                />
                <div>
                  <h4 className="font-bold">Another Person</h4>
                  <p className="text-gray-500 text-sm">Manager at Another Tech</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom navigation buttons */}
       
      </div>
            </section>
        </div>
    );
};

export default Testimonial;
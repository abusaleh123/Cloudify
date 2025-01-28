import logo1 from '../../assets/Icons/solutions.png'
import logo2 from '../../assets/Icons/badge.png'
import logo3 from '../../assets/Icons/scala.png'
import logo4 from '../../assets/Icons/reliability.png'
import logo5 from '../../assets/Icons/analytics.png'
import logo6 from '../../assets/Icons/personalization.png'
import logo7 from '../../assets/Icons/live.png'
import logo8 from '../../assets/Icons/automated-process.png'
import logo9 from '../../assets/Icons/smartphone.png'

const Features = () => {
    return (
        <div className="w-10/12 mx-auto py-20">
         <div>

                {/* Text */}
                <div className="text-center flex justify-center items-center flex-col" >
                <h1 className="text-2xl rounded-md font-medium text-[#8B71FB] border-2 border-[#8B71FB] w-fit py-2 px-8"> Why Choose ClodifyPro</h1>

                <h1 className="text-6xl my-10 font-bold ">Innovative Features for Business Success</h1>
                </div>


              <section className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 mt-6'>
                {/* Card */}
                <div className='py-12 px-12 bg-gray-100 rounded-md'>
                <img className='mb-4 bg-white p-2 w-12 rounded-md' src={logo1} alt="" />
                <h1 className="lg:text-3xl text-2xl font-bold">Integrated Solutions</h1>
                <p className="text-gray-600 text-lg font-semibold w-5/6 mt-4">Streamline your workflow with seamless integration.</p>
                </div>


                <div className='py-12 px-12 bg-gray-100 rounded-md'>
                <img className='mb-4 bg-white p-2 w-12 rounded-md' src={logo2} alt="" />
                <h1 className="lg:text-3xl text-2xl font-bold">Robust Security</h1>
                <p className="text-gray-600 font-semibold w-5/6 text-lg mt-4">Protect your data with advanced security measures.</p>
                </div>


                <div className='py-12 px-12 bg-gray-100 rounded-md'>
                <img className='mb-4 bg-white p-2 w-12 rounded-md' src={logo3} alt="" />
                <h1 className="lg:text-3xl text-2xl font-bold">Scalability at Scales</h1>
                <p className="text-gray-600 font-semibold w-5/6 text-lg mt-4">Grow your business effortlessly with scalable solutions.</p>
                </div>


                <div className='py-12 px-12 bg-gray-100 rounded-md'>
                <img className='mb-4 bg-white p-2 w-12 rounded-md' src={logo4} alt="" />
                <h1 className="lg:text-3xl text-2xl font-bold">Reliability Redefined</h1>
                <p className="text-gray-600 font-semibold w-5/6 text-lg mt-4">Dependable performance you can trust.</p>
                </div>


                <div className='py-12 px-12 bg-gray-100 rounded-md'>
                <img className='mb-4 bg-white p-2 w-12 rounded-md' src={logo5} alt="" />
                <h1 className="lg:text-3xl text-2xl font-bold">Insightful Analytics</h1>
                <p className="text-gray-600 font-semibold w-5/6 text-lg mt-4">Gain valuable insights to drive informed decisions.</p>
                </div>


                <div className='py-12 px-12 bg-gray-100 rounded-md'>
                <img className='mb-4 bg-white p-2 w-12 rounded-md' src={logo6} alt="" />
                <h1 className="lg:text-3xl text-2xl font-bold">Tailored Customizations</h1>
                <p className="text-gray-600 font-semibold w-5/6 text-lg mt-4">Customize solutions to fit your unique needs.</p>
                </div>


                <div className='py-12 px-12 bg-gray-100 rounded-md'>
                <img className='mb-4 bg-white p-2 w-12 rounded-md' src={logo7} alt="" />
                <h1 className="lg:text-3xl text-2xl font-bold">Live Monitorings</h1>
                <p className="text-gray-600 font-semibold w-5/6 text-lg mt-4">Stay informed with real-time monitoring.</p>
                </div>


                <div className='py-12 px-12 bg-gray-100 rounded-md'>
                <img className='mb-4 bg-white p-2 w-12 rounded-md' src={logo8} alt="" />
                <h1 className="lg:text-3xl text-2xl font-bold">Automated Safeguards</h1>
                <p className="text-gray-600 font-semibold w-5/6 text-lg mt-4">Ensure peace of mind with automated security measures.</p>
                </div>


                <div className='py-12 px-12 bg-gray-100 rounded-md'>
                <img className='mb-4 bg-white p-2 w-12 rounded-md' src={logo9} alt="" />
                <h1 className="lg:text-3xl text-2xl font-bold">Mobile-Optimized Access</h1>
                <p className="text-gray-600 font-semibold w-5/6 text-lg mt-4">Access your data anytime, anywhere, on any device.</p>
                </div>
              </section>



         </div>
        </div>
    );
};

export default Features;
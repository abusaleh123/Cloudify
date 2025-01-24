import image from '../../assets/Images/Screenshot 2025-01-24 115834.png'
import logo1 from '../../assets/Icons/cloud.png'
import logo2 from '../../assets/Icons/agile.png'
import logo3 from '../../assets/Icons/development.png'
import logo4 from '../../assets/Icons/cloud-computing.png'
import logo5 from '../../assets/Icons/cloud (1).png'
import logo6 from '../../assets/Icons/search-location.png'
const Transforming = () => {
  return (
    <div className="bg-[#7051F3]  py-28">
      <div className="w-10/12 mx-auto">
        <div className="flex gap-10">
          <div>
            <p className="text-3xl w-fit mb-6 py-2 px-4 rounded-lg text-white border">Our Cloud Solutions</p>
            <h1 className="text-5xl font-bold leading-tight text-white">
              Transforming Your Business Operations with Innovative Cloud
              Solutions
            </h1>
            <div 
  style={{
    background: 'linear-gradient(to bottom, #8d73fc, #866bfa, #8063f8, #795bf5, #7253f3)',
    paddingLeft: '0px', // Adjust to simulate the border width
    borderRadius: '0.75rem 0.75rem 0  0.75rem', // Rounded corners for the top-left and bottom-left
    marginTop: '3rem', // Match mt-12
  }}
  className="rounded-t-xl w-11/12  rounded-e-xl flex justify-end"
>
  <img 
    className="rounded-t-xl pt-24   rounded-e-xl" 
    src={image} 
    alt="" 
    style={{
      display: 'block',
      borderRadius: 'inherit', // Ensure the border radius matches the parent div
    }}
  />
</div>



          </div>
          <div>
            <p className="text-white w-5/6 text-lg">
              Discover a range of cloud services  designed to meet your business
              needs. From infrastructure to software, we offer scalable
              solutions to drive your success
            </p>
            <button className="btn border-none mt-6 px-10 bg-white hover:bg-white text-lg">Explore Our Services</button>

            <div className='mt-32 w-10/12 space-y-9'>
                {/* Card */}
                <div className='bg-white py-8 px-6 rounded-lg flex gap-6 items-center'>
               <img className='w' src={logo1} alt="" />
               <p className="text-2xl font-bold w-3/4">Cloud Infrastructure Solutions</p>
                </div>
                {/* Card */}
                <div className='bg-white py-4 px-6 rounded-lg flex gap-6 items-center'>
               <img className='w-8' src={logo2} alt="" />
               <p className="text-2xl font-bold w-3/4">Software-as-a-Service (SaaS) Applications</p>
                </div>
                {/* Card */}
                <div className='bg-white py-8 px-6 rounded-lg flex gap-6 items-center'>
               <img className='w-8' src={logo3} alt="" />
               <p className="text-2xl font-bold w-3/4">Data Management and Analytics</p>
                </div>
                {/* Card */}
                <div className='bg-white py-8 px-6 rounded-lg flex gap-6 items-center'>
               <img className='w-8' src={logo4} alt="" />
               <p className="text-2xl font-bold w-3/4">Cloud Solutions</p>
                </div>
                {/* Card */}
                <div className='bg-white py-8 px-6 rounded-lg flex gap-6 items-center'>
               <img className='w-8' src={logo5} alt="" />
               <p className="text-2xl font-bold w-3/4">Cybersecurity Solutions</p>
                </div>
                {/* Card */}
                <div className='bg-white py-8 px-6 rounded-lg flex gap-6 items-center'>
               <img className='w-8' src={logo6} alt="" />
               <p className="text-2xl font-bold w-3/4">Real Time  Tracer</p>
                </div>

            </div>




          </div>
        </div>
      </div>
    </div>
  );
};

export default Transforming;

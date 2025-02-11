import React from 'react';
import Chart from './Chart';
import DonutChart from './ChartTwo';
import { RiFileCopy2Line } from "react-icons/ri";
import { PiPaypalLogoDuotone } from "react-icons/pi";
import clickUp from '../../assets/Icons/clickup-seeklogo.png'
import airTable from '../../assets/Icons/airtable.png'
import jotForm from '../../assets/Icons/jot.png'
import image from '../../assets/Images/5c81b8f8-190c-4369-b2a8-188acfc11b11.jpeg'

const Banner = () => {
    return (
        <div className='bg-[#F1EEFE] '>
            <div className='w-10/12 mx-auto py-16' >
            {/*  */}
            <div className='lg:flex '>
            <div className=''>
            <h1 className="lg:text-8xl text-center font-bold md:text-start tracking-wide md:text-5xl text-5xl  md:font-semibold mb-6">
                Ascend Your Enterprise with  <br />
            
                <span className='text-[#7051F3]'>SaaS Mastery</span>
            </h1>
            <p className="text-gray-500 md:w-3/4 text-xl text-center md:text-start">
            We understand the importance of harnessing the power of the cloud to drive your business forward. Our comprehensive suite of cloud-based solutions is designed to streamline your operations
            </p>
                    <div className='flex flex-col md:flex-row gap-4  mt-6 '>
                        <button className='btn btn-ghost text-white text-lg hover:bg-[#7051F3] bg-[#7051F3]'>Book A Demo</button>
                        <button className='btn btn-ghost  border-2 border-[#FE7646] text-[#FE7646] text-lg'>Start Free Trial</button>
                    </div>
<div className='flex flex-col md:flex-row mt-10 items-center gap-4 justify-center md:justify-start'>
    <img className='w-12 h-12 rounded-full object-cover' src={image} alt="" />
    <div>
    <div class="rating rating-md flex justify-center md:justify-start">
  <input type="radio" name="rating-7" class="mask mask-star-2 bg-[#7051F3]" />
  <input type="radio" name="rating-7" class="mask mask-star-2 bg-[#7051F3]" />
  <input type="radio" name="rating-7" class="mask mask-star-2 bg-[#7051F3]" />
  <input type="radio" name="rating-7" class="mask mask-star-2 bg-[#7051F3]" />
  <input type="radio" name="rating-7" class="mask mask-star-2 bg-[#7051F3]" />

 
</div>
<h1 className="text-gray-500 text-center mt-2 md:mt-0">1000k Startups are launching faster</h1>
    </div>
</div>



            </div>
            <div className='grid gap-4 grid-cols-2 md:w-10/12 mt-8'>
               <div className=''>
               <div className='border rounded-xl bg-white col-span-1  '>
                <DonutChart></DonutChart>
                </div>
         
               </div>
                      {/*  */}
                      <div className='col-span-1 border rounded-xl px-4 py-4 bg-white md:space-y-9 space-y-1' >
                 <div>
                 <div className='flex items-center gap-1 justify-between'>
             <p className=' border bg-[#FFF5D9]  p-3 rounded-full'><RiFileCopy2Line className='text-[#FFC960] text-2xl' /></p>
             <div>
                <p className='text-md  font-bold'>Deposit from my Card</p>
                <p className='text-slate-400  text-md font-bold'>28 Jan 2024</p>
             </div>
             <p className='text-red-400 text-lg font-bold'>-$850</p>
             </div>
                 </div>
                 <div>
                 <div className='flex items-center justify-between'>
             <p className=' border bg-[#E7EdFF] p-3 rounded-full'><PiPaypalLogoDuotone className='text-blue-500 text-2xl' /></p>
             <div>
                <p className='md:text-md text-sm font-bold'>Deposit from my Card</p>
                <p className='text-slate-400 md:text-md text-sm font-bold'>28 Jan 2024</p>
             </div>
             <p className='text-[#4DD7AD] text-lg font-bold'>-$850</p>
             </div>
                 </div>
                 <div>
                 <div className='flex items-center justify-between'>
             <p className=' border bg-[#E7EdFF] p-3 rounded-full'><PiPaypalLogoDuotone className='text-blue-500 text-2xl' /></p>
             <div>
                <p className='text-md font-bold'>Deposit from my Card</p>
                <p className='text-slate-400 font-bold'>28 Jan 2024</p>
             </div>
             <p className='text-[#4DD7AD] text-lg font-bold'>-$850</p>
             </div>
                 </div>
                 <div>
                 <div className='flex items-center justify-between'>
             <p className=' border bg-[#E7EdFF] p-3 rounded-full'><PiPaypalLogoDuotone className='text-blue-500 text-2xl' /></p>
             <div>
                <p className='text-md font-bold'>Deposit from my Card</p>
                <p className='text-slate-400 font-bold'>28 Jan 2024</p>
             </div>
             <p className='text-[#4DD7AD] text-lg font-bold'>-$850</p>
             </div>
                 </div>
                
            







                </div>
                {/*  */}
            <div className='col-span-2 '>
            <Chart></Chart>
            </div>
            </div>
            </div>
            {/*  */}
            </div>

            <p className='divider w-10/12 mx-auto '></p>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-20 py-10 w-10/12 mx-auto'>
                <div >
                    <h1 className="text-3xl text-center md:text-start font-bold">Our Partners Companies</h1>
                    <p className="text-lg text-center md:text-start text-gray-500 font-semibold">Our comprehensive suite of cloud-based solutions is designed to streamline your operations</p>
                </div>
           
               <img  className='w-72 '  src={clickUp} alt="" />
                <img  className='w-72 ' src={airTable} alt="" />
                <img className='w-72 '  src={jotForm} alt="" />
          
            </div>
        </div>
    );
};

export default Banner;
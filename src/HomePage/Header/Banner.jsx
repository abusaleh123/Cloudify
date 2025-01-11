import React from 'react';
import Chart from './Chart';
import DonutChart from './ChartTwo';
import { RiFileCopy2Line } from "react-icons/ri";
import { PiPaypalLogoDuotone } from "react-icons/pi";

const Banner = () => {
    return (
        <div className='bg-[#F1EEFE] '>
            <div className='w-10/12 mx-auto py-16' >
            {/*  */}
            <div className='flex '>
            <div className=''>
            <h1 className="lg:text-8xl md:text-5xl text-4xl  font-semibold mb-6">
                Ascend Your Enterprise with
                <br />
                <span className='text-[#7051F3]'>SaaS Mastery</span>
            </h1>
            <p className="text-gray-400 w-3/4 text-lg">
            We understand the importance of harnessing the power of the cloud to drive your business forward. Our comprehensive suite of cloud-based solutions is designed to streamline your operations
            </p>
                    <div className='flex gap-4  mt-6 '>
                        <button className='btn btn-ghost text-white text-lg hover:bg-[#7051F3] bg-[#7051F3]'>Book A Demo</button>
                        <button className='btn btn-ghost  border-2 border-[#FE7646] text-[#FE7646] text-lg'>Start Free Trial</button>
                    </div>




            </div>
            <div className='grid gap-4 grid-cols-2 w-10/12 '>
               <div className=''>
               <div className='border rounded-xl bg-white col-span-1  '>
                <DonutChart></DonutChart>
                </div>
         
               </div>
                      {/*  */}
                      <div className='col-span-1 border rounded-xl px-4 py-4 bg-white space-y-9' >
                 <div>
                 <div className='flex items-center justify-between'>
             <p className=' border bg-[#FFF5D9] p-3 rounded-full'><RiFileCopy2Line className='text-[#FFC960] text-2xl' /></p>
             <div>
                <p className='text-md font-bold'>Deposit from my Card</p>
                <p className='text-slate-400 font-bold'>28 Jan 2024</p>
             </div>
             <p className='text-red-400 text-lg font-bold'>-$850</p>
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
        </div>
    );
};

export default Banner;
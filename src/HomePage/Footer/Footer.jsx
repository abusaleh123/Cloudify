// import { GiStarShuriken } from "react-icons/gi";
// const Footer = () => {
//     return (
//         <div className="bg-[#161031]   h-fit ">
//             <div className=' flex flex-col bg-[#7B5EF6] rounded-xl w-9/12 mx-auto h-[450px] border relative bottom-56 justify-center items-center'>
//           <h1 className="text-5xl text-white font-semibold">Start Your CloudifyPro Journey Today</h1>
//           <p className="text-white mt-6 text-xl w-2/4 text-center">Ready to revolutionize your workflow with CloudifyPro? Sign up now to experience seamless project management, real-time collaboration, and powerful analytics</p>
//           <button className='btn px-16 text-[#7B5EF6] text-lg mt-8'>Join Our CloudifyPro</button>
          
//           </div>
//         <div className=' w-9/12  mx-auto border relative bottom-20' >
          

//           <div>
//           <footer className="footer gap-52 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1  md:text-lg  text-white w-11/12 border mx-auto  p-10">
//   <div className="   ">
//  <div className="text-white flex items-center gap-1 border">
//  <GiStarShuriken  className="text-white mt-1  text-5xl"/>
//  <p className="lg:text-5xl md:text-3xl text-2xl font-bold">CloudifyPro</p>
//  </div>
//     <p className=" ">
//     CloudifyPro: Your ultimate solution for seamless project management and collaboration.Empower your team, streamline tasks, and 
//     </p>
//   </div>
//   <nav className="">
//     <h6 className="footer-title">Services</h6>
//     <a className="link link-hover">Branding</a>
//     <a className="link link-hover">Design</a>
//     <a className="link link-hover">Marketing</a>
//     <a className="link link-hover">Advertisement</a>
//   </nav>
//   <nav>
//     <h6 className="footer-title">Company</h6>
//     <a className="link link-hover">About us</a>
//     <a className="link link-hover">Contact</a>
//     <a className="link link-hover">Jobs</a>
//     <a className="link link-hover">Press kit</a>
//   </nav>
//   <nav>
//     <h6 className="footer-title">Legal</h6>
//     <a className="link link-hover">Terms of use</a>
//     <a className="link link-hover">Privacy policy</a>
//     <a className="link link-hover">Cookie policy</a>
//   </nav>
//   <nav>
//     <h6 className="footer-title">Legal</h6>
//     <a className="link link-hover">Terms of use</a>
//     <a className="link link-hover">Privacy policy</a>
//     <a className="link link-hover">Cookie policy</a>
//   </nav>
// </footer>
//           </div>
//         </div>
//         </div>
//     );
// };

// export default Footer;




import { GiStarShuriken } from "react-icons/gi";

const Footer = () => {
    return (
        <footer className="bg-[#161031] text-lg"> {/* Added padding and removed fixed height */}
            <div className="bg-[#7B5EF6] rounded-xl relative bottom-44 w-10/12 mx-auto py-20 px-8 md:px-24 text-center"> {/* Adjusted padding and width */}
                <h1 className="text-3xl md:text-5xl text-white font-semibold leading-tight"> {/* Responsive text size and leading */}
                    Start Your CloudifyPro Journey Today
                </h1>
                <p className="text-white mt-6 text-lg md:text-xl w-full md:w-2/3 mx-auto"> {/* Responsive text size and width, centered */}
                    Ready to revolutionize your workflow with CloudifyPro? Sign up now to experience seamless project management, real-time collaboration, and powerful analytics.
                </p>
                <button className='bg-white text-[#7B5EF6] font-medium py-3 px-8 rounded-lg mt-8 hover:bg-[#6849f3] hover:text-white transition duration-300'> {/* Improved button styling */}
                    Join Our CloudifyPro
                </button>
            </div>

            <div className="w-10/12 mx-auto relative bottom-16 text-lg"> {/* Adjusted margin top */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 text-white"> {/* Responsive grid */}
                    <div className="">
                        <div className="flex items-center gap-2">
                            <GiStarShuriken className="text-white text-4xl md:text-5xl" />
                            <p className="text-3xl md:text-4xl font-bold">CloudifyPro</p>
                        </div>
                        <p className="mt-4 text-sm md:text-lg text-gray-400"> {/* Added margin top and responsive text size */}
                            CloudifyPro: Your ultimate solution for seamless project management and collaboration. Empower your team, streamline tasks, and... {/* Added ellipsis */}
                        </p>
                    </div>
                    <div>
                        <h6 className="text-2xl mb-4">Quick Links</h6> {/* Added margin bottom */}
                        <ul className="space-y-2 text-gray-400"> {/* Used a list for better structure */}
                            <li><a href="#" className="hover:text-[#7B5EF6]">Home</a></li> {/* Added hover effect and hrefs */}
                            <li><a href="#" className="hover:text-[#7B5EF6]">Solutions</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">Features</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">Resources</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">Blog</a></li>
                        </ul>
                    </div>
                    {/* ... other nav sections with similar structure */}
                    <div>
                        <h6 className="text-2xl mb-4">Solutions</h6>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-[#7B5EF6]">CloudifyPro Enterprise</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">CloudifyPro Team   </a></li>
                                                    
                             <li><a href="#" className="hover:text-[#7B5EF6]">CloudifyPro Essentials</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">CloudifyPro Premium</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">CloudifyPro Advanced</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-2xl mb-4">Resources</h6>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-[#7B5EF6]">Guides & Tutorials</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">Case Studies</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">Webinars</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">Podcasts</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">E-books</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-2xl mb-4">Company</h6>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-[#7B5EF6]">FAQ</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">Contact Us</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">Careers</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-[#7B5EF6]">Support</a></li>
                        </ul>
                    </div>
                </div>
         
               
            </div>
            <div className="mt-10 bg-[#7B5EF6] py-6">
                <p className="text-center text-lg text-white "> {/* Copyright or other small text */}
                    &copy; {new Date().getFullYear()} CloudifyPro. All rights reserved.
                </p>
                </div>
        </footer>
    );
};

export default Footer;
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import logo from '../../assets/Images/blogger.png';
import {  useEffect, useState } from "react";
import { GiStarShuriken } from "react-icons/gi";
// import { signOut } from "firebase/auth";
// import auth from "../../firebase.init";

const Navbar = () => {
//   const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 



  const navStyle = (() => {
    if (location.pathname === '/') {
      return scrollPosition === 0 
        ? "sticky top-0 z-10 md:bg-opacity-40 md:text-white w-11/12" 
        : "sticky top-0 z-50 bg-white w-11/12 text-white mx-auto shadow-md";
    } 
    // 
    // 
    // else if (location.pathname === '/addBlogs') {
    //   return "bg-white w-11/12 mx-auto";
    // } 
    // else if(location.pathname === '/allBlogs') {
    //   return 'bg-white'
        
    // }
    // else if(location.pathname === '/featured') {
    //   return 'bg-white'
        
    // }
    // else if(location.pathname === '/wishList') {
    //   return 'bg-white'
        
    // }
    // else if(location.pathname === '/addReview') {
    //   return 'bg-white'
        
    // }
    // else if(location.pathname === '/all-reviews') {
    //   return 'bg-white'
        
    // }
    // else if(location.pathname === '/register') {
    //   return 'bg-white'
        
    // }
    // else if(location.pathname === '/login') {
    //   return 'bg-white'
        
    // }
    // else if(location.pathname === '/contact') {
    //   return 'bg-white'
        
    // }
    // else if(location.pathname.startsWith('/blogs/') && location.pathname.split('/')[4] === user?._id) {
    //   return 'bg-white'
        
    // }
    // else if(location.pathname.startsWith('/updateBlog/') && location.pathname.split('/')[4] === user?._id) {
    //   return 'bg-white'
        
    // }

    
    else {
      return "w-11/12 mx-auto"; // Default style for other paths
    }
  })();




//   const handleLogOut = () => {
//     signOut(auth)
//       .then(() => {
//         navigate('/login');
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };








  return (
    <div className={`w-full  ${navStyle} sticky top-0 z-50`}>
      <div className={`navbar w-10/12  mx-auto flex justify-center py-8`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost w-fit lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              style={{
                background: "linear-gradient(to top, #5350C3 0%, #8784F8 0%)"
              }}
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-white font-bold text-lg rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <NavLink className={'text-gray-700'} to={'/'}>Home</NavLink>
          <NavLink  className={'text-gray-700'} to={'/addBlogs'}>Solutions</NavLink>
            <NavLink  className={'text-gray-700'} to={'/allBlogs'}>Features</NavLink>
            <NavLink className={'text-gray-700'} to={'/featured'}>Resources</NavLink>
           <NavLink  className={'text-gray-700'} to={'/wishList'}>Blog</NavLink>
            </ul>
          </div>
          <Link to={'/'} className="flex items-center gap-2  justify-center ">
          <GiStarShuriken  className="text-[#7051F3] mt-1  text-5xl"/>
            <span className=" font-semibold   hidden text-5xl text-[#7051F3] md:inline-block items-center md:text-5xl">CloudifyPro</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal md:gap-6 lg:gap-8 px-3 lg:text-xl font-semibold">
            <NavLink className={'text-gray-00'} to={'/'}>Home</NavLink>
          <NavLink  className={'text-gray-700'} to={'/'}>Solutions</NavLink>
            <NavLink  className={'text-gray-700'} to={'/'}>Features</NavLink>
            <NavLink className={'text-gray-700'} to={'/'}>Resources</NavLink>
           <NavLink  className={'text-gray-700'} to={'/'}>Blog</NavLink>

          </ul>
        </div>
        <div className="navbar-end gap-1 md:gap-2">
        
              {/* <img className="md:w-12 md:h-12 w-8 h-8 object-cover rounded-full" src={user.photoURL} alt="User" />
              <button onClick={handleLogOut} style={{ background: "linear-gradient(to top, #5350C3 0%, #8784F8 59%)" }} className="btn text-white text-sm md:text-lg font-bold">Log Out</button> */}
           
         
        
              <Link to={'/register'}  className="btn btn-ghost text-black  w-20 md:w-fit lg:text-xl text-sm font-bold">Login</Link>
              <Link to={'/login'}  className="btn bg-[#7051F3] btn-ghost text-white  md:text-lg text-sm  md:w-fit font-semibold">Get Started</Link>
          
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;

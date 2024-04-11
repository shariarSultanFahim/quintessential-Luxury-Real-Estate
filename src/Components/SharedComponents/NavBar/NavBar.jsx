import { useContext, useEffect } from "react";
import { Link,NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Aos from "aos";
import 'aos/dist/aos.css'
import useWindowSize from "../../../CustomHook/windowSize";

const NavBar = () => {
    useEffect(()=>{
        Aos.init();
    },[])

    const {isLoading,user,userName,setUserName,logOut,currentPhoto,setCurrentPhoto} = useContext(AuthContext);

    const {width} = useWindowSize();
    

    const handleLogOut =()=>{
        logOut();
        setUserName('');    
        setCurrentPhoto('https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg')
    }

    const items = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/profile' >Profile</NavLink></li>
    {
        user&&<li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
    }
    <li><NavLink to='/favourites'>Favourites</NavLink></li>
    
    
    </>

    return (
        <div data-aos="fade-down" className="relative z-[999] py-4 mb-4 container mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    
                    </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 absolute z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    
                    {items}
                    
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Quintessential</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                
                {items}
                
                </ul>
            </div>
            <div className="navbar-end">
                <div className="inline-flex items-center gap-2">
                    {
                        (width >= 768)?
                        <div tabIndex={0} role="" className="btn tooltip  tooltip-left bg-transparent border-transparent hover:bg-transparent hover:border-transparent btn-circle avatar" data-tip={userName}>
                        {
                            user?isLoading?
                            <span className="loading loading-spinner loading-md"></span>
                            :<div className="w-10 rounded-full">
                            <img alt="Profile Photo" src={currentPhoto} /></div>:''
                        }
                    </div>:''
                    }
                    
                    <div>
                        {
                            !isLoading?user?
                            <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
                            :<Link to='/login'><button className="btn btn-ghost">Log In</button></Link>:''
                        }
                        </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
import { useContext } from "react";
import { Link,NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {

    const {isLoading,user,logOut} = useContext(AuthContext);

    const handleLogOut =()=>{
        logOut();   
    }

    const items = <>
    <li><NavLink to='/' >Home</NavLink></li>
    <li><NavLink to='/login'>login</NavLink></li>
    <li><NavLink to='/register'>register</NavLink></li>
    </>

    return (
        <div className="container mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    
                    </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    
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
                    <div tabIndex={0} role="" className="btn btn-ghost btn-circle avatar">
                        {
                            isLoading?
                            <span className="loading loading-spinner loading-md"></span>
                            :user?.photoURL?<div className="w-10 rounded-full">
                            <img alt="Profile Photo" src={user.photoURL} /></div>
                            :<div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /></div>
                        }
                    </div>
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
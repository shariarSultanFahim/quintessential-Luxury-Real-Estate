import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import {toast, Toaster} from "react-hot-toast"
import { AiOutlineEye ,AiOutlineEyeInvisible } from "react-icons/ai";
import useDocumentTitle from "../../CustomHook/useDocumentTitle";

const Login = () => {

    useDocumentTitle('Login');

    const [passVisibility,setPassVisibility] = useState(false);

    const handlePassVisibility = () =>{
        setPassVisibility(!passVisibility);
    }

    const {loginUser,googleLogin,setUser,githubLogin,user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    if(location.state === null){
        location.state = '/profile';
    }
    
    const handleLogin = (e) =>{
        e.preventDefault()
 
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email,password)
        .then(result =>{
            toast.success('Logged in sucessfully!');
        })
        .catch((error) =>{
            toast.error(error.code);
        })
    }
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            setUser(result.user)
            toast.success('Logged in sucessfully!');
        })  
        .catch((error) =>{
            toast.error(error.code);
        })
    }
    const handleGithubLogin = () =>{
        githubLogin()
        .then(result =>{
            setUser(result.user)
            toast.success('Logged in sucessfully!')
        })
        .catch((error) =>{
            toast.error(error.code);
        })
    }

    useEffect(()=>{
        if(user){
            setTimeout(()=>{
                navigate(location.state);
            },300);
            
        }
    },[user]);  

    return (
        <div className="container mx-auto hero min-h-screen ">
            <div className="hero-content flex-col">
                

                <div className="card w-full shadow-2xl bg-base-100 md:w-96">
                <form onSubmit={handleLogin} className="card-body">
                    
                    <div className='text-center'>
                        <button onClick={handleGoogleLogin} className='p-4 text-3xl'><FcGoogle /></button>
                        <button onClick={handleGithubLogin } className='p-4 text-3xl'><AiFillGithub /></button>
                    </div>

                    <div className="divider text-gray-400">OR</div>
                    
                    <div className="form-control">
                    
                    <input type="email" name="email" placeholder="Email" className="input input-bordered focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>

                    <div className="form-control relative">
                        <input name="password"
                        type={passVisibility?'text':'password'}
                        placeholder="Password" className="input input-bordered focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />

                        <a type="" onClick={handlePassVisibility} className="absolute right-2 top-1/3 text-xl hover:cursor-pointer">
                        {passVisibility?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}
                        </a>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <a className="label-text-alt">New to our site?</a>
                        <Link to='/register'><a  className="label-text-alt link link-hover">Register Now</a></Link>
                    </label>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-primary-700 hover:bg-primary-800">Login</button>
                    </div>
                </form>
                </div>
            </div>
            <div><Toaster position="top-right"/></div>
        </div>
    );
};

export default Login;
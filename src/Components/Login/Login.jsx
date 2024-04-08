import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import {toast, Toaster} from "react-hot-toast"
import useDocumentTitle from "../../CustomHook/useDocumentTitle";

const Login = () => {

    useDocumentTitle('Login');

    const {loginUser,googleLogin,setUser,githubLogin,user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    const handleLogin = (e) =>{
        e.preventDefault()
 
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email,password)
        .then(result =>{
            console.log(result.user);
            toast.success('Logged in sucessfully!')
        })
        .catch((error) =>{
            toast.error(error.code);
        })
    }
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            setUser(result.user)
            toast.success('Logged in sucessfully!')
            navigate(location.state)
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
            navigate(location.state)
        })
        .catch((error) =>{
            toast.error(error.code);
        })
    }

    useEffect(()=>{
        if(user){
            navigate(location.state)
        }
    },[user]);  

    return (
        <div className="container mx-auto hero min-h-screen ">
            <div className="hero-content flex-col gap-6">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100 md:w-96">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                    <label className="label">
                        <Link to='/register'><a href="#" className="label-text-alt link link-hover">Register Now</a></Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

                <div className="divider">OR</div>

                <div className='text-center'>
                    <button onClick={handleGoogleLogin} className='p-4 text-3xl'><FcGoogle /></button>
                    <button onClick={handleGithubLogin } className='p-4 text-3xl'><AiFillGithub /></button>
                </div>
                </div>
            </div>
            <div><Toaster position="top-right"/></div>
        </div>
    );
};

export default Login;
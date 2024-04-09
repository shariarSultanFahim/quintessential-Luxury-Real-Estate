import { AiOutlineEye ,AiOutlineEyeInvisible } from "react-icons/ai";
import useDocumentTitle from "../../CustomHook/useDocumentTitle";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import {toast, Toaster} from "react-hot-toast"



const Register = () => {
    useDocumentTitle('Register');


    const [passVisibility,setPassVisibility] = useState(false);

    const handlePassVisibility = () =>{
        setPassVisibility(!passVisibility);
    }

    const formRef = useRef(null);
    const {registerUser,setUser,setCurrentPhoto,setUserName} = useContext(AuthContext);
    const [error,setError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [nameError,setNameError] = useState("");

    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if(name.length==0){
            setNameError("Enter a valid Name");
        }
        else
            setNameError('');

        if(email.length==0){
            setEmailError("Enter a valid email");
        }
        else
            setEmailError('');
        
        if(password.length==0){
            setError("Enter a valid password");
            return
        }
        if(password.length<6){
            setError("Password must be at least 6 characters");
            return
        }
        if(!/[A-Z]/.test(password)){    
            setError("Must have an Uppercase letter in the password");
            return
        }
        if(!/[a-z]/.test(password)){
            setError("Must have an Lowercase letter in the password");
            return
        }
        if(password !== confirmPassword){
            setError("Passwords didn't match");
            return
        }
        
        setError('');
        setEmailError('');
        setNameError('');

        registerUser(email,password)
        .then(result=>{
            updateProfile(result.user,{
                displayName:name,
                photoURL:photoURL
            });
            setUser(result.user);
            setCurrentPhoto(photoURL);
            setUserName(name);
            toast.success("Registration Successful!");

            formRef.current.reset();
        })  
        .catch(error=> setError(error.message));
    }


    return (
        <div className="container mx-auto hero min-h-screen ">
            
            <div className="hero-content flex-col gap-6">
                <div className="text-center">
                    <h1 className="text-gray-600 text-5xl font-bold">Register</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100 md:w-96">
                    <form onSubmit={handleRegister} className="card-body" ref={formRef}>
                    <div>
                    
                        <input name='name' type="text" placeholder="Name" className="input input-bordered w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    {nameError && <small className='text-red-500'>{nameError}</small>}
                    <div>
                    
                        <input name='email' type="text" placeholder="Email" className="input input-bordered w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    {emailError && <small className='text-red-500'>{emailError}</small>}
                    <div>
                    
                        <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div className="relative">
                   
                        <input name='password' 
                        type={passVisibility?'text':'password'} 
                        placeholder="Password" className="input input-bordered w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />

                        <a type="" onClick={handlePassVisibility} className="absolute right-2 top-1/3 text-xl hover:cursor-pointer">
                            {passVisibility?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}
                        </a>

                    </div>
                    <div className="">
                   
                        <input name='confirmPassword' 
                        type={passVisibility?'text':'password'} 
                        placeholder="Confirm password" className="input input-bordered w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        
                    </div>
                    {
                        error && <small className='text-red-500'>{error}</small>
                    }
                    <label className="label">
                        <p className="label-text-alt ">Already have an account?</p>
                        <Link to='/login'><a className="label-text-alt link link-hover">Log In</a></Link>
                    </label>
                    <button type='submit' className='btn btn-neutral w-full'>Register</button>
                    </form>
                </div>
                <div><Toaster position="top-right"/></div>
            </div>
            
        </div>
    );
};

export default Register;
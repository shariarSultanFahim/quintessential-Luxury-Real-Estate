import { AiOutlineEye ,AiOutlineEyeInvisible } from "react-icons/ai";
import useDocumentTitle from "../../CustomHook/useDocumentTitle";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateCurrentUser, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";



const Register = () => {
    useDocumentTitle('Register');


    const [passVisibility,setPassVisibility] = useState(false);

    const handlePassVisibility = () =>{
        setPassVisibility(!passVisibility);
    }

    const formRef = useRef(null);
    const {registerUser,setUser} = useContext(AuthContext);
    const [error,setError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [nameError,setNameError] = useState("");

    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
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
            setUser(result.user);
            formRef.current.reset();
        })
        .catch(error=> setError(error.message));

    }


    return (
        <div className="container mx-auto hero min-h-screen ">
            <div className="hero-content flex-col gap-6">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100 md:w-96">
                    <form onSubmit={handleRegister} className="card-body" ref={formRef}>
                    <div>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered w-full" />
                    </div>
                    {nameError && <small className='text-red-500'>{nameError}</small>}
                    <div>
                        <input name='email' type="text" placeholder="Email" className="input input-bordered w-full" />
                    </div>
                    {emailError && <small className='text-red-500'>{emailError}</small>}
                    <div>
                        <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered w-full" />
                    </div>
                    <div className="relative">
                        <input name='password' 
                        type={passVisibility?'text':'password'} 
                        placeholder="Password" className="input input-bordered w-full " />

                        <a type="" onClick={handlePassVisibility} className="absolute right-2 top-1/3 text-xl hover:cursor-pointer">
                            {passVisibility?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}
                        </a>

                    </div>
                    <div className="relative">
                        <input name='confirmPassword' 
                        type={passVisibility?'text':'password'} 
                        placeholder="Confirm password" className="input input-bordered w-full " />
                        <a onClick={handlePassVisibility} className="absolute right-2 top-1/3 text-xl hover:cursor-pointer">
                            {passVisibility?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}
                        </a>
                    </div>
                    {
                        error && <small className='text-red-500'>{error}</small>
                    }
                    <button type='submit' className='btn btn-primary w-full'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
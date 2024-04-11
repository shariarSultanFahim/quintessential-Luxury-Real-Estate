import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import {toast, Toaster} from "react-hot-toast"
import useDocumentTitle from "../../CustomHook/useDocumentTitle";
import Aos from "aos";
import 'aos/dist/aos.css'

const UpdateProfile = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    useDocumentTitle('Update Profile');
    const {user,setUserName,currentPhoto, setCurrentPhoto} = useContext(AuthContext);

    const [currentName, setCurrentName] = useState(user.displayName);
    const [currentEmail] = useState(user.email);

    const handleUpdateProfile =(e)=>{
        e.preventDefault();
        
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const phone = e.target.phone.value;

        if(name.length === 0 && photo.length===0 && phone.length===0){
            toast.error('You have to enter valid info!');
            return;
        }
        if(name.length !=0){
            setCurrentName(name);
            setUserName(name);
            updateProfile(user,{
                displayName:name
            })
        }
        if(photo.length !=0){
            setCurrentPhoto(photo);
            updateProfile(user,{
                photoURL:photo
            })
        }
        if(phone.length !=0){
            updateProfile(user,{
                phoneNumber:phone,
            })
        }
        toast.success('Profile Updated sucessfully!')

    }

    return (
        <div className="container mx-auto my-10 min-h-screen">
        <div  data-aos="fade-up" className=" rounded  p-5 shadow-md">
        <div className="flex flex-col md:flex-row gap-6">

            <div className="flex flex-col items-center border-r px-4 py-8">
                <div className="rounded-full w-52 h-52 mx-auto mt-5 overflow-hidden">
                    <img className=" w-full h-full " src={currentPhoto}/>
                </div>
                <h3 className="text-xl font-bold text-center mt-3">{currentName}</h3>
                <p className="text-gray-500 text-center">{currentEmail}</p>
            </div>

            <div className="w-full shadow sm:rounded-lg">
            <div  className="px-4 py-8">
                <div className="flex justify-between items-center mb-3">
                    <h4 className="text-right text-xl font-bold">Profile Settings</h4>
                </div>
                <form onSubmit={handleUpdateProfile}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div><label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="full name" /></div>

                        <div><label className="block text-sm font-medium text-gray-700">Photo</label>
                        <input type="text" name="photo" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="photo url"/></div>
                    </div>
                    
                    <div><label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input type="text" name="phone" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="phone number"/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div><label className="block text-sm font-medium text-gray-700">State</label>
                        <input type="text" name="state" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="state"/></div>

                        <div><label className="block text-sm font-medium text-gray-700">Country/Region</label>
                        <input type="text" name="country" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="country"/></div>
                    </div>
                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button bg-green-800 border-none hover:bg-green-900">Update Profile</button></div>
                </form>
                
            </div>
            </div>
        </div>
        </div><div><Toaster position="top-right"/></div></div>
    );
};

export default UpdateProfile;
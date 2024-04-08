import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import {toast, Toaster} from "react-hot-toast"

const Profile = () => {
    const {user,currentPhoto, setCurrentPhoto} = useContext(AuthContext);

    const [currentName, setCurrentName] = useState(user.displayName);
    const [currentEmail, setCurrentEmail] = useState(user.email);

    const handleUpdateProfile =(e)=>{
        e.preventDefault();
        
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const phone = e.target.phone.value;

        if(name.length !=0){
            setCurrentName(name);
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
        <div className="container mx-auto rounded  p-5 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="flex flex-col items-center border-r px-4 py-8">
                <img className="rounded-full w-30 h-30 mx-auto mt-5" src={currentPhoto}/>
                <h3 className="text-xl font-bold text-center mt-3">{currentName}</h3>
                <p className="text-gray-500 text-center">{currentEmail}</p>
            </div>

            <div className="col-span-1 md:col-span-2">
            <div  className="px-4 py-8">
                <div className="flex justify-between items-center mb-3">
                    <h4 className="text-right text-xl font-bold">Profile Settings</h4>
                </div>
                <form onSubmit={handleUpdateProfile}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div><label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="first name" /></div>

                        <div><label className="block text-sm font-medium text-gray-700">Photo</label>
                        <input type="text" name="photo" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="photo url"/></div>
                    </div>
                    <div><label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={currentEmail}/>
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
                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button">Save Profile</button></div>
                </form>
                
            </div>
            </div>
        </div><div><Toaster position="top-right"/></div>
        </div>
    );
};

export default Profile;
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
    const {isLoading,user,userName} = useContext(AuthContext);
    console.log(user)
    return (
        <div className="container mx-auto rounded  p-5 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center border-r px-4 py-8">
            <img className="rounded-full w-30 h-30 mx-auto mt-5" src={user.photoURL}/>
            <h3 className="text-xl font-bold text-center mt-3">{user.displayName}</h3>
            <p className="text-gray-500 text-center">{user.email}</p>
            </div>

            <div className="col-span-2">
            <div className="px-4 py-8">
                <div className="flex justify-between items-center mb-3">
                <h4 className="text-right text-xl font-bold">Profile Settings</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>   
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="first name"/>
                </div>
                <div>
                    <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Photo URL</label>
                    <input type="text" id="photoURL" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="enter photo URL"/>
                </div>
                <div className="col-span-2">
                    <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <input type="text" id="mobile-number" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="enter phone number"/>
                </div>
                <div className="col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
                    <input type="email" id="email" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="enter email id"/>
                </div>
                <div className="col-span-1">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                    <input type="text" id="country" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="country"/>
                </div>
                <div className="col-span-1">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State/Region</label>
                    <input type="text" id="state" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="state"/>
                </div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Profile;
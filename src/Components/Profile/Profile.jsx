import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useDocumentTitle from "../../CustomHook/useDocumentTitle";
import Aos from "aos";
import 'aos/dist/aos.css'

const Profile = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    useDocumentTitle('Profile');
    const {user,currentPhoto} = useContext(AuthContext);

    const [currentName] = useState(user.displayName);
    const [currentEmail] = useState(user.email);

    return (
        <div className="container mx-auto h-screen my-10">
        <div data-aos="fade-up" className=" rounded  p-5 shadow-md">

        <div className="flex flex-col md:flex-row gap-6">

            <div className="flex flex-col items-center border-r px-4 py-8">
                <div className="rounded-full w-52 h-52 mx-auto mt-5 overflow-hidden">
                <img className=" w-full h-full " src={currentPhoto}/>
                </div>
                <h3 className="text-xl font-bold text-center mt-3">{currentName}</h3>
                
            </div>

            <div className="bg-white w-full shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        User Info
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Details and informations about user.
                    </p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Full name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {currentName}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {currentEmail}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Varified
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.emailVerified?'Yes':'No'}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Account Created On
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.metadata.creationTime}
                            </dd>
                        </div>
                        
                    </dl>
                </div>
            </div>
                
            
        </div>
        </div></div>
    );
};

export default Profile;
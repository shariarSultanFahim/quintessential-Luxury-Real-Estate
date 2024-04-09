import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { CiLocationOn } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";


const Properties = () => {

    const {apiLoading, property} = useContext(AuthContext);

    if (apiLoading) {
        return <div className="flex justify-center items-center m-10">
        <span className="loading loading-spinner loading-lg"></span>
        </div>;
      }

    return (
        <div className="container mx-auto my-10">
            {
            apiLoading && <div className="flex justify-center items-center m-10">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
            }
            
            <div className="flex flex-col gap-6">
                
                {
                    property.map(house =>(
                        <Link key={house.id}><div  className="flex flex-col md:flex-row gap-6 border rounded-xl">
                        <div className="mx-auto w-full h-50 md:mx-0 md:w-96 md:h-70 ">
                            <img className="w-full h-full rounded-t-xl md:rounded-none md:rounded-l-xl" src={house.image} alt="Property Image" />
                        </div>
                        <div className="space-y-2 pl-2">
                            <h1 className="text-3xl font-jetBrains font-light">{house.estate_title}</h1>
                            <h1 className="text-2xl font-jetBrains">{house.price}</h1>
                            <h1>
                                <span className="pr-2 border-r border-black">{house.segment_name}</span>
                                <span className="px-2 border-r border-black">{house.Status}</span>
                                <span className="px-2">{house.Area}</span>
                            </h1>
                            <h1 className="inline-flex items-center gap-2"><CiLocationOn/>{house.location}
                            </h1>
                            <ul className="flex flex-wrap gap-4">
                            {
                                house.facilities.map((facility,idx) =>(
                                    <li
                                    key={idx}
                                    >{facility}</li>
                                ))
                            }
                            </ul>
                            <div className="pt-6 space-x-2">
                                <button className="w-20 p-2 font-semibold text-green-800 bg-green-500 bg-opacity-40 rounded-lg inline-flex items-center gap-2" onClick={()=>document.getElementById('phone').showModal()}><BsPhone/>Call</button>
                                <button className="w-20 p-2 font-semibold text-green-800 bg-green-500 bg-opacity-40 rounded-lg inline-flex items-center gap-2" onClick={()=>document.getElementById('email').showModal()}><MdOutlineMailOutline/>Email</button>
                            </div>
                        </div>
                        </div></Link>
                    ))
                }    
                
            </div>
            

            



        {/* POP Ups */}
        <dialog id="phone" className="modal">
        <div className="modal-box text-center">
            <h3 className="font-bold text-3xl">Contact Us</h3>
            <p className="py-4 hover:underline">quintessentialproperties.com</p>
            <h1 className=" text-xl font-bold text-green-700 inline-flex items-center gap-2"><BsPhone/>+880 1748715273</h1>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
        <dialog id="email" className="modal">
        <div className="modal-box text-center">
            <h3 className="font-bold text-3xl">Contact Us</h3>
            <p className="py-4 hover:underline">quintessentialproperties.com</p>
            <h1 className=" text-xl font-medium text-green-700 inline-flex items-center gap-2"><MdOutlineMailOutline/>info@quintessentialproperties.com</h1>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>


        </div>
    );
};

export default Properties;
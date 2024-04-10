import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { CiLocationOn } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'

const Properties = () => {

    useEffect(()=>{
        Aos.init();
    },[])
    

    const {apiLoading, property, filterProperty,setFilterProperty,showAllBtn , setShowAllBtn} = useContext(AuthContext);
    
    if (apiLoading) {
        return <div className="flex justify-center items-center m-10">
        <span className="loading loading-spinner loading-lg"></span>
        </div>;
      }

    const showAll =()=>{
        setFilterProperty(property);
        setShowAllBtn(false);
    }

    return (
        <div className="container mx-auto my-10 w-[98%] md:w-full">
            {
            apiLoading && <div className="flex justify-center items-center m-10">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
            }
            {
                showAllBtn&&<div data-aos="fade-down" data-aos-offset="50" className="flex justify-center md:justify-end mb-10">
                <button onClick={showAll} className="btn btn-success">Show All</button>
                </div>
            }
            <div className="flex flex-col gap-6">
                
                {
                    filterProperty.map(house =>(
                    <div key={house.id} data-aos="slide-up" data-aos-offset="50"  className="flex flex-col md:flex-row gap-6 border rounded-xl">
                        <div className="mx-auto w-full h-52 md:mx-0 md:w-[400px]  md:h-[260px] bg-cover bg-no-repeat bg-center rounded-t-xl md:rounded-none md:rounded-l-xl" style={{ backgroundImage: `url(${house.image})` }}>
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
                            <div className="pt-6 inline-flex items-start gap-2">
                                <button className="w-20 p-2 font-semibold text-green-800 bg-green-500 bg-opacity-40 rounded-lg inline-flex items-center gap-2" onClick={()=>document.getElementById('phone').showModal()}><BsPhone/>Call</button>
                                <button className="w-20 p-2 font-semibold text-green-800 bg-green-500 bg-opacity-40 rounded-lg inline-flex items-center gap-2" onClick={()=>document.getElementById('email').showModal()}><MdOutlineMailOutline/>Email</button>
                                <Link to={`/estateDetails/${house.id}`}><button className="w-32 p-2 font-semibold text-green-800 bg-green-500 bg-opacity-40 rounded-lg " >View Property</button></Link>
                            </div>
                        </div>
                    </div>
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
                <button  type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">X</button>
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
            <form method="dialog" >
                <button  type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">X</button>
            </form>
            </div>
        </div>
        </dialog>


        </div>
    );
};

export default Properties;
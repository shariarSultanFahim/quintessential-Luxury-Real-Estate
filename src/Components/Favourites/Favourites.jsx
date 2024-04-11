import { useContext, useEffect, useState } from "react";
import { getSavedProperty, removeFromSaved } from "./localStorage";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

const Favourites = () => {
     const {property} = useContext(AuthContext);  
    

    const [favourites, setFavourites] = useState([]);
    const savedProperty = getSavedProperty();

    useEffect(()=>{
        const filterData = property.filter((item) => savedProperty.includes(item.id));
        setFavourites(filterData);
    },[]);

    const handleFav = (id) =>
    {
        removeFromSaved(id);
        const savedProperty = getSavedProperty();
        const filterData = property.filter((item) => savedProperty.includes(item.id));
        setFavourites(filterData);
    }



    return (
        <div className="container mx-auto min-h-screen my-10">
            <h1 className="border-b text-4xl font-jetBrains font-thin pb-2">Favourite Properties</h1>
            {
                (favourites.length ==0 )&&
                <div className="my-10">
                    <h1>Your Favourite list is empty.</h1>
                    <Link to='/'><h1 className="hover:underline hover:text-green-800">Check out all properties</h1></Link>
                </div>
            }
           
           {
            favourites.map(house => (
                <div key={house.id}  data-aos="slide-up" data-aos-offset="50"  className="mt-10 flex flex-col md:flex-row gap-6 border rounded-xl">
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
                            <div className="pt-6 flex flex-wrap items-center gap-2">
                                <button className="w-20 p-2 font-semibold text-green-800 bg-green-500 bg-opacity-40 rounded-lg inline-flex items-center gap-2" onClick={()=>document.getElementById('phone').showModal()}><BsPhone/>Call</button>
                                <button className="w-20 p-2 font-semibold text-green-800 bg-green-500 bg-opacity-40 rounded-lg inline-flex items-center gap-2" onClick={()=>document.getElementById('email').showModal()}><MdOutlineMailOutline/>Email</button>
                                <Link to={`/estateDetails/${house.id}`}><button className="w-32 p-2 font-semibold text-green-800 bg-green-500 bg-opacity-40 rounded-lg " >View Property</button></Link>
                                <button onClick={()=>handleFav(house.id)} className="p-2 font-semibold rounded-lg">
                                    <div className="text-red-700 text-3xl"><AiFillHeart/></div>
                                </button>
                            
                            </div>
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
            ))
           }

        </div>
    );
};

export default Favourites;
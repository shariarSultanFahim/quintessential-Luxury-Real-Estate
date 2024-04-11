import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Aos from "aos";
import 'aos/dist/aos.css'
import Property from "./Property";

const Properties = () => {

    useEffect(()=>{
        Aos.init();
    },[])
    

    const {apiLoading, property, filterProperty,setFilterProperty,showAllBtn , setShowAllBtn,user} = useContext(AuthContext);
    
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
                    filterProperty.map(house => <Property key={house.id} property={house}></Property>)
                }    
                
            </div>
            

            






        </div>
    );
};

export default Properties;
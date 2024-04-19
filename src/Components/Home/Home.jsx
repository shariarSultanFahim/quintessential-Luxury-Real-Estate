import useDocumentTitle from "../../CustomHook/useDocumentTitle"
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import useWindowSize from "../../CustomHook/windowSize";
import Properties from "../Properties/Properties";
import { useContext, useState } from "react";
import OurTeam from "../OurTeam/OurTeam";
import { BiSolidDownArrow,BiSolidUpArrow } from "react-icons/bi";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Home = () => {
    useDocumentTitle('Home');


    const [isOpenFull, setIsOpenFull] = useState(false);
    const options = ['New York', 'California', 'Italy', 'Colorado', 'Maldives','Florida','Costa Rica','France','Nevada'];
  
    const toggleFullList = () => {
      setIsOpenFull(!isOpenFull);
    };

    const {property,setFilterProperty , setShowAllBtn} = useContext(AuthContext);
    

    const filter = (filterBy) =>{

        const filteredData = property.filter((item) => {
            const country= item.country; 
            return (
              country.includes(filterBy)
            );
          });
          setFilterProperty(filteredData);
          setShowAllBtn(true);
    }


    return (
        <div className="container mx-auto min-h-screen">
            
            {/* Corousel Banner */}
            <div className="mx-auto w-[95%] h-[150px] md:w-full md:h-[500px] overflow-hidden">
                <Swiper
                 modules={[Pagination, Scrollbar, A11y,Autoplay]}
                 autoplay={{
                     delay: 1500,
                     disableOnInteraction: false,
                   }}
                 spaceBetween={50}
                 slidesPerView={1}
                 loop={true}
                 pagination={{ clickable: true }}
                 scrollbar={{ draggable: true }}
            
                 className="mySwiper"
                 >
                <SwiperSlide  >
                    <div className="relative">
                    <h1 className="animate__animated animate__bounceInLeft text-3xl left-[10%] top-[10%]  md:text-6xl absolute z-50 md:top-[25%] md:left-12 text-white font-jetBrains">Quintessential <br /> 
                    <span className="text-xl md:text-4xl ">Luxury Real Estates</span> 
                    <br />
                    <span className="text-xl font-thin md:text-3xl">Villa</span>
                    </h1>
                    <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                    </div>
                    <img className="w-full h-full absolue z-10" src="https://www.home-designing.com/wp-content/uploads/2020/04/wood-clad-house-exterior.jpg"/>  
                    </div>
                </SwiperSlide>
                <SwiperSlide  >
                    <div className="relative">
                    <h1 className="animate__animated animate__bounceInLeft text-3xl left-[10%] top-[10%]  md:text-6xl absolute z-50 md:top-[20%] md:left-12 text-white font-jetBrains">Quintessential <br /> 
                    <span className="text-xl md:text-4xl ">Luxury Real Estates</span> 
                    <br />
                    <span className="text-xl font-thin md:text-3xl">Rainforest Luxury Lodge</span>
                    </h1>
                    <img className="w-full h-full absolue z-0" src="https://www.travelandleisure.com/thmb/QONX7Ovws-5JgiGJr92OX3Iu8T8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mashpi-lodge-RAINFRSTHOTEL0122-829d1175038041489e191521d3d727d7.jpg "/>  
                    </div>
                </SwiperSlide>
                <SwiperSlide  >
                    <div className="relative">
                    <h1 className="animate__animated animate__bounceInLeft text-3xl left-[10%] top-[10%]  md:text-6xl absolute z-50 md:top-[20%] md:left-12 text-white font-jetBrains">Quintessential <br /> 
                    <span className="text-xl md:text-4xl ">Luxury Real Estates</span> 
                    <br />
                    <span className="text-xl font-thin md:text-3xl">Mountain Resort</span>
                    </h1>
                    <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                    </div>
                    <img className="w-full h-full absolue z-0" src="https://static2.mansionglobal.com/production/media/article-images/f76d1875e40e1cf67b01ec46174f1a5b/large_S1-HQ229_wsjski_M_20200930113704.jpg"/>  
                    </div>
                </SwiperSlide>
                <SwiperSlide  >
                    <div className="relative">
                    <h1 className="animate__animated animate__bounceInLeft text-3xl left-[10%] top-[10%]  md:text-6xl absolute z-50 md:top-[20%] md:left-12 text-white font-jetBrains">Quintessential <br /> 
                    <span className="text-xl md:text-4xl ">Luxury Real Estates</span> 
                    <br />
                    <span className="text-xl font-thin md:text-3xl">Sky View Penthouse</span>
                    </h1>
                    <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                    </div>
                    <img className="w-full h-full absolue z-0" src="https://cdn.tatlerasia.com/asiatatler/i/ph/2019/07/18161159-3-super-penthouse_cover_2000x1168.jpg"/>  
                    </div>
                </SwiperSlide>
                <SwiperSlide  >
                    <div className="relative">
                    <h1 className="animate__animated animate__bounceInLeft text-3xl left-[10%] top-[10%]  md:text-6xl absolute z-50 md:top-[20%] md:left-12 text-white font-jetBrains">Quintessential <br /> 
                    <span className="text-xl md:text-4xl ">Luxury Real Estates</span> 
                    <br />
                    <span className="text-xl font-thin md:text-3xl">Private Island</span>
                    </h1>
                    <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                    </div>
                    <img className="w-full h-full absolue z-0" src="https://moneyinc.com/wp-content/uploads/2016/05/Amillarah-Private-Islands.gif"/>  
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>

            {/* Property Listing Header and Filter*/}
            <div className=" container mx-auto my-10">
            <h1 className="font-jetBrains text-xl pl-2 md:pl-0">Residential Properties for Sale & Rent</h1>

            <div className="mt-10 relative inline-block border rounded-md w-full">
                <div className="overflow-hidden bg-white rounded-md ">
                    {!isOpenFull && (
                        <ul className="py-1 grid grid-cols-3 items-center">
                        {options.slice(0, 3).map((option, index) => (
                            <li
                            onClick={()=>{filter(option)}}
                            key={index}
                            className=" mx-auto px-4 py-2 text-blue-700 hover:underline hover:cursor-pointer">
                            {option}
                            </li>
                        ))}</ul>
                    )
                    }
                    {isOpenFull && (
                        <ul className="py-1 grid grid-cols-3 items-center">
                        {options.map((option, index) => (
                            <li
                            onClick={()=>{filter(option)}}
                            key={index + 3}
                            className=" mx-auto px-4 py-2 text-blue-700 hover:underline hover:cursor-pointer"
                            >
                            {option}
                            </li>
                        ))}
                        </ul>
                    )}
                    
                </div>
                
                <button
                    className="mx-auto w-full text-center text-xs text-green-700 font-bold hover:cursor-pointer mt-2 inline-flex items-center gap-2 justify-center"
                    onClick={toggleFullList}>
                    {isOpenFull? 'VIEW FEWER LOCATIONS' : 'VIEW ALL LOCATIONS'}
                    {isOpenFull?<BiSolidUpArrow/>:<BiSolidDownArrow/> }
                    
                </button>
                
            </div>
            
            </div>
            {/*Property Listing*/}
            <Properties></Properties>

            {/* Team Section */}
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;
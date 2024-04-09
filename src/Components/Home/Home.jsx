import useDocumentTitle from "../../CustomHook/useDocumentTitle"
import { register } from 'swiper/element/bundle';
import useWindowSize from "../../CustomHook/windowSize";
import Properties from "../Properties/Properties";
import { useState } from "react";



const Home = () => {
    useDocumentTitle('Home');
    const {width} = useWindowSize();

    register();

    const [isOpenFull, setIsOpenFull] = useState(false);
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5','Option 6'];
  
    const toggleFullList = () => {
      setIsOpenFull(!isOpenFull);
    };

    return (
        <div className="container mx-auto min-h-screen">
            
            {/* Corousel Banner */}
            <div className=" mx-auto w-[95%] h-[150px] md:w-full md:h-[500px] overflow-hidden">
                <swiper-container slides-per-view="1" Speed="500" Loop='true' Navigation={(width < 768)?'false':'true'}>
                <swiper-slide  >
                    <div className="relative">
                    <h1 className="animate__animated animate__backInLeft text-3xl left-[10%] top-[10%]  md:text-6xl absolute z-50 md:top-[25%] md:left-12 text-white font-jetBrains">Quintessential <br /> 
                    <span className="text-xl md:text-4xl ">Luxury Real Estates</span> 
                    <br />
                    <span className="text-xl font-thin md:text-3xl">Villa</span>
                    </h1>
                    <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                    </div>
                    <img className="w-full h-full absolue z-0" src="https://www.home-designing.com/wp-content/uploads/2020/04/wood-clad-house-exterior.jpg"/>  
                    </div>
                </swiper-slide>
                <swiper-slide  >
                    <div className="relative">
                    <h1 className="text-3xl left-[10%] top-[10%]  md:text-6xl absolute z-50 md:top-[20%] md:left-12 text-white font-jetBrains">Quintessential <br /> 
                    <span className="text-xl md:text-4xl ">Luxury Real Estates</span> 
                    <br />
                    <span className="text-xl font-thin md:text-3xl">Rainforest Luxury Lodge</span>
                    </h1>
                    <img className="w-full h-full absolue z-0" src="https://www.travelandleisure.com/thmb/QONX7Ovws-5JgiGJr92OX3Iu8T8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mashpi-lodge-RAINFRSTHOTEL0122-829d1175038041489e191521d3d727d7.jpg "/>  
                    </div>
                </swiper-slide>
                <swiper-slide  >
                    <div className="relative">
                    <h1 className="text-3xl left-[10%] top-[10%]  md:text-6xl absolute z-50 md:top-[20%] md:left-12 text-white font-jetBrains">Quintessential <br /> 
                    <span className="text-xl md:text-4xl ">Luxury Real Estates</span> 
                    <br />
                    <span className="text-xl font-thin md:text-3xl">Mountain Resort</span>
                    </h1>
                    <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                    </div>
                    <img className="w-full h-full absolue z-0" src="https://static2.mansionglobal.com/production/media/article-images/f76d1875e40e1cf67b01ec46174f1a5b/large_S1-HQ229_wsjski_M_20200930113704.jpg"/>  
                    </div>
                </swiper-slide>
                <swiper-slide  >
                    <div className="relative">
                    <h1 className="text-3xl left-[10%] top-[10%]  md:text-6xl absolute z-50 md:top-[20%] md:left-12 text-white font-jetBrains">Quintessential <br /> 
                    <span className="text-xl md:text-4xl ">Luxury Real Estates</span> 
                    <br />
                    <span className="text-xl font-thin md:text-3xl">Sky View Penthouse</span>
                    </h1>
                    <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                    </div>
                    <img className="w-full h-full absolue z-0" src="https://cdn.tatlerasia.com/asiatatler/i/ph/2019/07/18161159-3-super-penthouse_cover_2000x1168.jpg"/>  
                    </div>
                </swiper-slide>
                <swiper-slide  >
                    <div className="relative">
                    <h1 className="text-3xl left-[10%] top-[10%]  md:text-6xl absolute z-50 md:top-[20%] md:left-12 text-white font-jetBrains">Quintessential <br /> 
                    <span className="text-xl md:text-4xl ">Luxury Real Estates</span> 
                    <br />
                    <span className="text-xl font-thin md:text-3xl">Private Island</span>
                    </h1>
                    <div className="absolute z-30 w-full h-full bg-black bg-opacity-30">
                    </div>
                    <img className="w-full h-full absolue z-0" src="https://moneyinc.com/wp-content/uploads/2016/05/Amillarah-Private-Islands.gif"/>  
                    </div>
                </swiper-slide>
                </swiper-container>
            </div>

            {/* Property Listing Header and Filer*/}
            <div className=" container mx-auto my-10">
            <h1 className="font-jetBrains text-xl">Residential Properties for Sale & Rent</h1>

            <div className="mt-10 relative inline-block border rounded-md w-full">
                <div className="overflow-hidden bg-white rounded-md shadow-sm">
                    <ul className="py-1 flex justify-evenly ">
                    {options.slice(0, 3).map((option, index) => (
                        <li
                        key={index}
                        className="block px-4 py-2 text-blue-700 hover:underline hover:cursor-pointer">
                        {option}
                        </li>
                    ))}</ul>
                    {isOpenFull && (
                        <ul className="py-1 flex justify-evenly ">
                        {options.slice(3).map((option, index) => (
                            <li
                            key={index + 3}
                            className="block px-4 py-2 text-blue-700 hover:underline hover:cursor-pointer"
                            >
                            {option}
                            </li>
                        ))}
                        </ul>
                    )}
                    
                </div>
                
                <button
                    className="mx-auto w-full text-center text-xs text-green-700 font-bold hover:cursor-pointer mt-2"
                    onClick={toggleFullList}>
                    {isOpenFull ? 'VIEW FEWER LOCATIONS' : 'VIEW ALL LOCATIONS'}
                </button>
                
            </div>
            
            </div>
            {/*Property Listing*/}
            <Properties></Properties>
        </div>
    );
};

export default Home;
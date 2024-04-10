import { useContext,  useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';
import {toast, Toaster} from "react-hot-toast"
import useWindowSize from '../../CustomHook/windowSize';
import useDocumentTitle from '../../CustomHook/useDocumentTitle';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const EstateDetails = () => {
    useDocumentTitle('Estate Details');
    const {width} = useWindowSize();
    const formRef = useRef(null);
    const {id} = useParams();
    const {apiLoading,property} = useContext(AuthContext);

    if (apiLoading) {
        return <div className="flex justify-center items-center m-10">
        <span className="loading loading-spinner loading-lg"></span>
        </div>;
      }



    const currentProperty = property.find(((house) => house.id == id));


    
    const handleEnquire =(e)=>{
        e.preventDefault();
        toast.success('Thank you for contacting us. We will get back to you.');
        formRef.current.reset();
    }
    return (
        <div data-aos='flip-up' className='container mx-auto'>
            <div className='my-10 rounded border-y p-5 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start'>
                <div className='lg:col-span-2'>
                    <h1 className='text-3xl font-thin font-jetBrains border-b pb-2 pl-2'>Property details</h1>
                    <div className='my-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start'>
                        <div data-aos={(width<1024)?'fade-up':'fade-right'} className='m-2 rounded shadow-xl'>
                            <img className='rounded-t' src={currentProperty.image} alt="property image" />
                            <h1 className='p-2 font-jetBrains text-2xl text-center'>{currentProperty.estate_title}</h1>
                        </div>
                        <div data-aos="fade-up" className='p-2 pt-0 shadow-xl space-y-4'>
                            <h1 className='text-3xl font-thin font-jetBrains border-b pb-2'>Property Overview</h1>    
                            <div className='flex mt-4'>
                                <div className='border-r w-1/2 pl-6 space-y-4'>
                                    <h1 className=''>Price: {currentProperty.price}</h1>
                                    <h1 className="">{currentProperty.segment_name}</h1>
                                    <h1 className="">{currentProperty.Status}</h1>
                                    <h1 className="">{currentProperty.Area}</h1>
                                    
                                    <h1 className="inline-flex items-center gap-2"><CiLocationOn/>{currentProperty.location}
                                    </h1>
                                </div>
                                <div className='pl-6 space-y-4'>
                                    <p>Facilities:</p>
                                    <ul className="space-y-1">
                                    
                                    {
                                        currentProperty.facilities.map((facility,idx) =>(
                                            <li
                                            key={idx}
                                            >{facility}</li>
                                        ))
                                    }
                                    </ul>
                                </div>
                            </div>
                            <h1 className='p-2 font-jetBrains text-md'>{currentProperty.description}</h1>
                        </div>
                    </div>
                    
                </div>

                <div data-aos={(width<1024)?'fade-up':'fade-left'} className='p-2 shadow-xl'>
                <section className="bg-white">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 pb-4 text-4xl tracking-tight font-thin text-center text-gray-900 border-b ">Enquire Now</h2>
                        
                        <form ref={formRef} onSubmit={handleEnquire} className="space-y-8">
                            <div>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-white border-b" placeholder="Name" required/>
                            </div>
                            <div>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-white border-b" placeholder="Email" required/>
                            </div>
                            <div>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-white border-b" placeholder="Phone" required/>
                            </div>
                            <div className="sm:col-span-2">
                                <textarea id="message" rows="1" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border-b" placeholder="Leave as comment..."></textarea>
                            </div>
                            <button  type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
                        </form>
                    </div>
                    </section>
                </div>
            </div>


            <div><Toaster position="top-right"/></div>
        </div>
    );
};

export default EstateDetails;
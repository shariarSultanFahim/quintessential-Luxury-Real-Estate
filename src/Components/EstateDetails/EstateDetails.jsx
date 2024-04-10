import { useParams } from 'react-router-dom';
const EstateDetails = () => {
    const {id} = useParams();
    return (
        <div className='container mx-auto min-h-screen'>
            Details of : {id}
        </div>
    );
};

export default EstateDetails;
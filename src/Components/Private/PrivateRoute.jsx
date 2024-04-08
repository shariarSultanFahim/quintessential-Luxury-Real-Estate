import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {isLoading,user} = useContext(AuthContext);

    

    if(user){
        return children;
    }
    else if(isLoading)
        return <div className='container min-h-screen mx-auto mt-28 w-10'><span className="loading loading-spinner loading-lg"></span></div>;

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;
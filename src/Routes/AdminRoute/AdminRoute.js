import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Loding';

const AdminRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location =useLocation();

if(loading || isAdminLoading){
    return
    <Loading></Loading>
}

    if(user && isAdmin){
        return children;
    }
    return (
        <Navigate to='/login' state={{form: location}} replace></Navigate>
            
        
    );
};

export default AdminRoute;
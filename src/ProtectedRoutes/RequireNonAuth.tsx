import React, { useContext } from 'react';
import { Navigate } from 'react-router';

import UserContext from '../context/UserContext';

const RequireNonAuth: React.FC<{children: JSX.Element}> = ({ children }) => {
    const [user] = useContext(UserContext);

    if(user) return <Navigate to="/account" replace />

    return children
};

export default RequireNonAuth;
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../context/UserContext';

const RequireAuth: React.FC<{children: any}> = ({ children }) => {
    const [user] = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate("/signin");
        }
    }, [user, navigate]);

    return(
        <>
        {user ? children : null}
        </>
    );
};

export default RequireAuth;
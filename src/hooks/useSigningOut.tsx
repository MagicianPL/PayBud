import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../context/UserContext';

const useSigningOut = () => {
    const [, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const signOut = () => {
        setUser(undefined);
        window.localStorage.removeItem("paylink_user");
        navigate("/");
    };

    return { signOut };
};

export default useSigningOut;
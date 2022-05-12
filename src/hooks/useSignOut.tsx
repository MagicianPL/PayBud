import { useContext } from 'react';

import UserContext from '../context/UserContext';

const useSignOut = () => {
    const [, setUser] = useContext(UserContext);

    const signOut = () => {
        setUser(undefined);
    };

    return { signOut };
};

export default useSignOut;
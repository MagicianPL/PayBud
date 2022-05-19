import { useContext, useState, useCallback } from 'react';

import UserContext from '../context/UserContext';

const useGetNotesOfUser = () => {
    const [user] = useContext(UserContext);
    const [fetchingError, setFetchingError] = useState("");
    const [notes, setNotes] = useState<any>(null);

    const getNotesOfUser = useCallback(
        async () => {
            //GET Request
            const res = await fetch(`${process.env.REACT_APP_API_URL}/notes/ofuser/${user._id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${user.token}`
                },
            });
            const data = await res.json();
    
            if(!res.ok) return setFetchingError(data.message);
    
            //Success
            setNotes(data);
        }, [user._id, user.token]
    )
    return { getNotesOfUser, notes, fetchingError };
};

export default useGetNotesOfUser;
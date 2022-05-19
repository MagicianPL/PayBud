import { useContext, useState } from 'react';

import UserContext from '../context/UserContext';

const useGetNotesOfTransaction = () => {
    const [user] = useContext(UserContext);
    const [fetchingError, setFetchingError] = useState("");
    const [notes, setNotes] = useState<any>(null);

    const getNotesOfTransaction = async (transactionId: string | undefined) => {
        //GET Request
        const res = await fetch(`${process.env.REACT_APP_API_URL}/notes/oftransaction/${transactionId}`, {
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
    };
    return { getNotesOfTransaction, notes, fetchingError };
};

export default useGetNotesOfTransaction;
import { useState, useContext, useCallback } from 'react';
import UserContext from '../context/UserContext';

const useGetTransactions = () => {
    const [transactionsOfSpecificUser, setTransactionsOfSpecificUser] = useState<any>(null);
    const [fetchingError, setFetchingError] = useState("");
    const [user] = useContext(UserContext);

    const getTransactions = useCallback(
        async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/transactions/user/${user._id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${user.token}`
                },
            });
            const data = await res.json();
    
            if (!res.ok) return setFetchingError(data.message);
    
            setTransactionsOfSpecificUser(data.reverse());
        }, [user._id, user.token]
    );

    return { getTransactions, fetchingError, transactionsOfSpecificUser };
};

export default useGetTransactions;
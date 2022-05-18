import { useContext } from 'react';

import UserContext from '../context/UserContext';
import useModal from './useModal';

const useArchiveTransaction = () => {
    const [user] = useContext(UserContext);
    const { showModal, setShowModal, modalError, setModalError } = useModal();

    const archiveTransaction = async (transactionId: string) => {
        setShowModal(true);

        //PATCH Request
        const res = await fetch(`${process.env.REACT_APP_API_URL}/transactions/${transactionId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                isArchived: true
            })
        });
        const data = await res.json();

        if(!res.ok) return setModalError(data.message);

        //Success
        window.location.reload();
    };

    const onModalClick = () => {
        setShowModal(false);
        setModalError("");
    };

    return { archiveTransaction, showModal, modalError, onModalClick };
};

export default useArchiveTransaction;
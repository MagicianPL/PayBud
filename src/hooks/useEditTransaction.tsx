import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../context/UserContext';
import useModal from './useModal';

const useEditTransaction = () => {
    const navigate = useNavigate();
    const [user] = useContext(UserContext);
    const { showModal, setShowModal, modalMessage, setModalMessage, modalError, setModalError } = useModal();

    const editTransaction = async (e: React.FormEvent<HTMLFormElement>, formValues: any) => {
        e.preventDefault();
        setShowModal(true);
        
        //Simple, quick Validation
        if (!formValues.title || !formValues.checkedStatus) {
            setModalError("Wprowadzono nieprawidłowe dane.");
            return;
        };

        //PATCH Request
        const res = await fetch(`${process.env.REACT_APP_API_URL}/transactions/${formValues.transactionId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                title: formValues.title,
                amount: formValues.amount,
                status: formValues.checkedStatus,
                creator: user._id
            })
        });
        const data = await res.json();

        if(!res.ok) return setModalError(data.message);

        //Success
        setModalMessage("Transakcja została zaktualizowana!");
        setTimeout(() => {
            navigate("/account/transactions");
            setModalError("");
            setModalMessage("");
            setShowModal(false);
        }, 2000);
    };

    const onModalClick = () => {
        setShowModal(false);
        setModalError("");
        setModalMessage("");
    };

    return { editTransaction, showModal, modalMessage, modalError, onModalClick };
};

export default useEditTransaction;
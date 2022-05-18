import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../context/UserContext';
import useModal from './useModal';

const useCreateTransaction = () => {
    const navigate = useNavigate();
    const [user] = useContext(UserContext);
    const { showModal, setShowModal, modalMessage, setModalMessage, modalError, setModalError } = useModal();

    const createTransaction = async (e: React.FormEvent<HTMLFormElement>, formValues: any) => {
        e.preventDefault();
        setShowModal(true);

        //Simple, quick Validation
        if (!formValues.title || !formValues.checkedStatus) {
            setModalError("Wprowadzono nieprawidłowe dane.");
            return;
        };

        //POST Request
        const res = await fetch(`${process.env.REACT_APP_API_URL}/transactions`, {
            method: 'POST',
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
        setModalMessage("Stworzyłeś nową transakcję!");
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

    return { createTransaction, showModal, modalMessage, modalError, onModalClick };
};

export default useCreateTransaction;
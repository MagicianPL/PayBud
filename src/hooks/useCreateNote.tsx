import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../context/UserContext';
import useModal from './useModal';

const useCreateNote = () => {
    const navigate = useNavigate();
    const [user] = useContext(UserContext);
    const { showModal, setShowModal, modalMessage, setModalMessage, modalError, setModalError } = useModal();

    const createNote = async (e: React.FormEvent<HTMLFormElement>, formValues: any) => {
        e.preventDefault();
        setShowModal(true);
        
        //Simple, quick Validation
        if (!formValues.note.trim()) {
            setModalError("Wprowadzono nieprawidłowe dane.");
            return;
        };

        //POST Request
        const res = await fetch(`${process.env.REACT_APP_API_URL}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                title: formValues.title,
                creator: user._id,
                note: formValues.note,
                forTransaction: formValues.forTransaction
            })
        });
        const data = await res.json();

        if(!res.ok) return setModalError(data.message);

        //Success
        setModalMessage("Stworzyłeś nową notatkę!");
        setTimeout(() => {
            navigate("/account/notes");
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

    return { createNote, showModal, modalMessage, modalError, onModalClick };
};

export default useCreateNote;
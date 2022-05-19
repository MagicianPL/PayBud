import { useContext } from 'react';

import UserContext from '../context/UserContext';
import useModal from './useModal';

const useDeleteNote = () => {
    const [user] = useContext(UserContext);
    const { showModal, setShowModal, modalMessage, setModalMessage, modalError, setModalError } = useModal();

    const deleteNote = async (noteId: string) => {
        setShowModal(true);

        //DELETE Request
        const res = await fetch(`${process.env.REACT_APP_API_URL}/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
        });
        const data = await res.json();

        if(!res.ok) return setModalError(data.message);

        //Success
        setModalMessage("Notatka została usunięta - strona zostanie przeładowana.");
        setTimeout(() => {
            window.location.reload();
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

    return { deleteNote, showModal, modalMessage, modalError, onModalClick };
};

export default useDeleteNote;
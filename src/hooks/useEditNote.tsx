import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../context/UserContext';
import useModal from './useModal';

const useEditNote = () => {
    const navigate = useNavigate();
    const [user] = useContext(UserContext);
    const { showModal, setShowModal, modalMessage, setModalMessage, modalError, setModalError } = useModal();

    const editNote = async (e: React.FormEvent<HTMLFormElement>, formValues: any) => {
        e.preventDefault();
        setShowModal(true);
        
        //Simple, quick Validation
        if (!formValues.note || !formValues.note.trim()) {
            setModalError("Wprowadzono nieprawidłowe dane.");
            return;
        };

        //PATCH Request
        const res = await fetch(`${process.env.REACT_APP_API_URL}/notes/${formValues.noteId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                note: formValues.note
            })
        });
        const data = await res.json();

        if(!res.ok) return setModalError(data.message);

        //Success
        setModalMessage("Notatka została zaktualizowana!");
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

    return { editNote, showModal, modalMessage, modalError, onModalClick };
};

export default useEditNote;
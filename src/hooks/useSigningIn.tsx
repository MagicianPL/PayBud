import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../context/UserContext';
import useModal from './useModal';

const useSigningIn = () => {
    const [, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const { showModal, setShowModal, modalError, setModalError } = useModal();

    const signingIn = async (e: React.FormEvent<HTMLFormElement>, formValues: {
        email: string
        password: string
    }) => {
        e.preventDefault();
        setShowModal(true);

        //Simple, quick Validation
        if (!formValues.email || !formValues.password) {
            setModalError("Nieprawidłowa nazwa użytkownika lub hasło.");
        };

        //POST Request
        const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        });
        const data = await res.json();

        if(!res.ok) return setModalError(data.message);

        //Success
        setUser(data);
        navigate('/account');
        setShowModal(false);
        setModalError("");
    };

    const onModalClick = () => {
        setShowModal(false);
        setModalError("");
    };

    return { signingIn, showModal, modalError, onModalClick };
};

export default useSigningIn;
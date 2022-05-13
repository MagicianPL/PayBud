import { useNavigate } from 'react-router-dom';

import useModal from "./useModal";

const useUserRegistration = () => {
    const { showModal, setShowModal, modalMessage, setModalMessage, modalError, setModalError } = useModal();
    const navigate = useNavigate();

    const registerUser = async (e: React.FormEvent<HTMLFormElement>, formValues: any) => {
        e.preventDefault();
        setShowModal(true);
        //Validation
        if (!formValues.login || !formValues.email || !formValues.password || !formValues.repeatedPassword) {
            setModalError("Nieprawidłowo wypełniony formularz rejestracji.");
            return;
        } else if (formValues.password !== formValues.repeatedPassword) {
            setModalError("Hasła nie są ze sobą zgodne.");
            return;
        } else if (formValues.password.length < 6) {
            setModalError("Hasło musi składać się z co najmniej 6 znaków.");
            return;
        };

        //POST Request
        const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        });
        const data = await res.json();

        if(!res.ok) {
            setModalError(data.message);
            return;
        };

        setModalMessage("Zostałeś poprawnie zarejestrowany - nastąpi przekierowanie na stronę logowania.");
        setTimeout(() => {
            navigate('/signin');
            setShowModal(false);
        }, 3500);
    };

    const onModalClick = () => {
        setModalMessage("");
        setModalError("");
        setShowModal(false);
    };

    return { registerUser, showModal, setShowModal, modalMessage, modalError, onModalClick };
};

export default useUserRegistration;
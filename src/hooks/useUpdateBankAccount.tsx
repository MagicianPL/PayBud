import { useContext } from 'react';

import useModal from './useModal';
import UserContext from '../context/UserContext';

const useUpdateBankAccount = () => {
    const { showModal, setShowModal, modalMessage, setModalMessage, modalError, setModalError } = useModal();
    const [user, setUser] = useContext(UserContext);

    const updateBankAccount = async (e: React.FormEvent<HTMLFormElement>, bankAccount: string) => {
        e.preventDefault();
        setShowModal(true);

        //Validation
        if(!bankAccount || bankAccount.trim().length < 26) return setModalError("Nieprawidłowe format numeru konta. Numer konta powinien składać się z 26 cyfr.");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${user._id}`);
        const data = await res.json();

        if(!res.ok) return setModalError(data.message);

        //Success - data now is updated user with new token
        setModalMessage("Twój numer konta został poprawnie i bezpiecznie zaszyfrowany w bazie danych.");
        setUser(data);
        window.localStorage.setItem("paylink_user", JSON.stringify(data));
    };

    const onModalClick = () => {
        setShowModal(false);
        setModalMessage("");
        setModalError("");
    };

    return { updateBankAccount, showModal, modalMessage, modalError, onModalClick };
};

export default useUpdateBankAccount;
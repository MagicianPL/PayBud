import { useContext } from 'react';

import useModal from './useModal';
import UserContext from '../context/UserContext';

const useUpdateBankAccount = () => {
    const { showModal, setShowModal, modalMessage, setModalMessage, modalError, setModalError } = useModal();
    const [user, setUser] = useContext(UserContext);

    const updateBankAccount = async (e: React.FormEvent<HTMLFormElement>, bankAccount: string, acceptedTerms: boolean) => {
        e.preventDefault();
        setShowModal(true);

        //Validation
        if(!acceptedTerms) return setModalError("Wymagane pole nie zostało zaznaczone.");
        if(!bankAccount || bankAccount.trim().length < 26) return setModalError("Nieprawidłowy format numeru konta. Numer konta powinien składać się z 26 cyfr.");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${user._id}`, {
            method: "PATCH",
            headers: {
                'authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bankAccount
            })
        });
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
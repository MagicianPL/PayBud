import { useContext } from 'react';

import useModal from './useModal';
import UserContext from '../context/UserContext';

const useDeleteConnectedData = () => {
    const { showModal, setShowModal, modalMessage, setModalMessage, modalError, setModalError } = useModal();
    const [user, setUser] = useContext(UserContext);

    const deleteConnectedData = async () => {
        setShowModal(true);

        const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${user._id}`, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();

        if(!res.ok) return setModalError(data.message);

        //Success - data now is updated user with new token
        setModalMessage("Twój numer konta oraz numer telefonu zostały poprawnie i stale usunięte.");
        setUser(data);
        window.localStorage.setItem("paylink_user", JSON.stringify(data));
    };

    const onModalClick = () => {
        setShowModal(false);
        setModalMessage("");
        setModalError("");
    };

    return { deleteConnectedData, showModal, modalMessage, modalError, onModalClick };
};

export default useDeleteConnectedData;
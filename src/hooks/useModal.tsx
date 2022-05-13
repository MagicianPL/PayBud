import { useState } from 'react';

const useModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalError, setModalError] = useState("");

    return { showModal, setShowModal, modalMessage, setModalMessage, modalError, setModalError };
};

export default useModal;
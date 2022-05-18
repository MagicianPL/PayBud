import React, { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';

import StyledAddTransactionWrapper from './StyledAddTransactionWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import Input from '../../../../components/Input/Input';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import Modal from '../../../../components/Modal/Modal';
import useCreateTransaction from '../../../../hooks/useCreateNewTransaction';

const AddTransaction = () => {
    const { createTransaction, showModal, modalMessage, modalError, onModalClick } = useCreateTransaction();

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [checkedStatus, setCheckedStatus] = useState("Oczekująca");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedStatus(e.target.value);
    };

    return(
        <StyledAddTransactionWrapper>
            <StyledPageSubtitle>Dodaj transakcję</StyledPageSubtitle>
            <form onSubmit={(e) => createTransaction(e, {title, amount, checkedStatus})}>
                <Input id="transaction-title" label="Tytuł Transakcji" onChange={handleTitleChange} value={title} />
                <Input id="transaction-amount" label="Kwota (opcjonalnie)" type="number" onChange={handleAmountChange} value={amount} />
                <p>Status Transakcji</p>
                <div className="status">
                <label className="container">Oczekująca
                <input type="radio" name="status" checked={checkedStatus === "Oczekująca"} value="Oczekująca" onChange={handleStatusChange} />
                <span className="checkmark"></span>
                </label>
                <label className="container">Zapłacona
                <input type="radio" name="status" checked={checkedStatus === "Zapłacona"} value="Zapłacona" onChange={handleStatusChange} />
                <span className="checkmark"></span>
                </label>
                <label className="container">Niezapłacona
                <input type="radio" name="status" checked={checkedStatus === "Niezapłacona"} value="Niezapłacona" onChange={handleStatusChange} />
                <span className="checkmark"></span>
                </label>
                </div>
                <StyledButton>Zapisz</StyledButton>
            </form>
            <p className="tip">
                <BsInfoCircle />
                Przejdź do transakcji i kliknij w ikonę notatki aby powiązać notatkę z transakcją!
            </p>
            { showModal && <Modal modalMessage={modalMessage} modalError={modalError} onClick={onModalClick} /> }
        </StyledAddTransactionWrapper>
    );
};

export default AddTransaction;
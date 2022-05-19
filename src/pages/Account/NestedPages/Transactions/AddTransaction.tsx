import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';

import StyledAddTransactionWrapper from './StyledAddTransactionWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import Input from '../../../../components/Input/Input';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import Modal from '../../../../components/Modal/Modal';
import useCreateTransaction from '../../../../hooks/useCreateNewTransaction';
import useEditTransaction from '../../../../hooks/useEditTransaction';

const AddTransaction = () => {
    const { createTransaction, showModal, modalMessage, modalError, onModalClick } = useCreateTransaction();
    const { editTransaction, showModal: edit_showModal, modalMessage: edit_modalMessage, modalError: edit_modalError, onModalClick: edit_onModalClick } = useEditTransaction();
    //Query Strings Stuff
    const [searchParams] = useSearchParams();
    const transactionId = searchParams.get('transaction');
    const transactionTitle = searchParams.get('title');
    const transactionAmount = searchParams.get('amount');
    const transactionStatus = searchParams.get('status');
    /****************************************************** */

    /* If in edit mode states are from previous created transaction */
    const [title, setTitle] = useState(transactionTitle || "");
    const [amount, setAmount] = useState(transactionAmount || "");
    const [checkedStatus, setCheckedStatus] = useState(transactionStatus || "Oczekująca");

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
            <StyledPageSubtitle>{!transactionId ? "Dodaj transakcję" : "Edytuj"}</StyledPageSubtitle>
            <form onSubmit={(e) => {
                if(!transactionId) return createTransaction(e, {title, amount, checkedStatus});
                if(transactionId) return editTransaction(e, {title, amount, checkedStatus, transactionId})
            }}>
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
            { edit_showModal && <Modal modalMessage={edit_modalMessage} modalError={edit_modalError} onClick={edit_onModalClick} />}
        </StyledAddTransactionWrapper>
    );
};

export default AddTransaction;
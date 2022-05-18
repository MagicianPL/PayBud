import React, { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';

import StyledAddTransactionWrapper from './StyledAddTransactionWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import Input from '../../../../components/Input/Input';
import StyledButton from '../../../../components/StyledButton/StyledButton';

const AddTransaction = () => {
    const [checkedStatus, setCheckedStatus] = useState("Oczekująca");

    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedStatus(e.target.value);
    };

    return(
        <StyledAddTransactionWrapper>
            <StyledPageSubtitle>Dodaj transakcję</StyledPageSubtitle>
            <form>
                <Input id="transaction-title" label="Tytuł Transakcji" />
                <Input id="transaction-amount" label="Kwota (opcjonalnie)" type="number" />
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
        </StyledAddTransactionWrapper>
    );
};

export default AddTransaction;
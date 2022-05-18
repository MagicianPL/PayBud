import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';

import StyledAddTransactionWrapper from './StyledAddTransactionWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import Input from '../../../../components/Input/Input';
import StyledButton from '../../../../components/StyledButton/StyledButton';

const AddTransaction = () => {
    return(
        <StyledAddTransactionWrapper>
            <StyledPageSubtitle>Dodaj transakcję</StyledPageSubtitle>
            <form>
                <Input id="transaction-title" label="Tytuł Transakcji" />
                <Input id="transaction-amount" label="Kwota (opcjonalnie)" type="number" />
                <p>Status Transakcji</p>
                <div className="status">
                <label className="container">Oczekujący
                <input type="radio" name="status" />
                <span className="checkmark"></span>
                </label>
                <label className="container">Zapłacono
                <input type="radio" name="status" />
                <span className="checkmark"></span>
                </label>
                <label className="container">Niezapłacono
                <input type="radio" name="status" />
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
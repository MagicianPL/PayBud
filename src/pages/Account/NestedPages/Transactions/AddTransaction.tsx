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
            
            <StyledButton>Zapisz</StyledButton>
            <p className="tip">
                <BsInfoCircle />
                Przejdź do transakcji i kliknij w ikonę notatki aby powiązać notatkę z transakcją!
            </p>
        </StyledAddTransactionWrapper>
    );
};

export default AddTransaction;
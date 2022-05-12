import React from 'react';

import StyledWrapper from './StyledWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import Input from '../../../../components/Input/Input';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import Modal from '../../../../components/Modal/Modal';

const Paylink = () => {
    return(
        <StyledWrapper>
            <StyledPageSubtitle>Twój Paylink</StyledPageSubtitle>
            <h2>Wygeneruj nową transakcję oraz <strong>Paylinka</strong> dla Klienta</h2>
            <form>
                <Input id="title" label="Twoja nazwa transakcji" />
                <Input type="number" id="amount" label="Kwota" placeholder="Kwota PLN" />
                <StyledButton>Generuj</StyledButton>
            </form>
            <Modal showCostInfo />
        </StyledWrapper>
    );
};

export default Paylink;
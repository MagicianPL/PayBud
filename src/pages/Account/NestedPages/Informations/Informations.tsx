import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';

import StyledWrapper from './StyledWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';

const Informations = () => {
    return(
        <StyledWrapper>
            <StyledPageSubtitle>Informacje</StyledPageSubtitle>
            <BsInfoCircle />
            <h2>W tej chwili posiadasz na swoim koncie:</h2>
            <p>Stworzone transakcje: <span>25</span></p>
            <p>W tym zarchiwizowanych: <span>4</span></p>
            <footer>
                <p>Miłego dnia, <span>MagicianPL!</span></p>
            </footer>
        </StyledWrapper>
    );
};

export default Informations;
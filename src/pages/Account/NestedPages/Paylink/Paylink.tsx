import React from 'react';

import StyledWrapper from './StyledWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';

const Paylink = () => {
    return(
        <StyledWrapper>
            <StyledPageSubtitle>Twój Paylink</StyledPageSubtitle>
            <h2>Wygeneruj nową transakcję oraz <strong>Paylinka</strong> dla Klienta</h2>
        </StyledWrapper>
    );
};

export default Paylink;
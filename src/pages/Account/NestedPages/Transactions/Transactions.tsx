import React from 'react';

import StyledWrapper from './StyledWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import SingleTransaction from '../../../../components/SingleTransaction/SingleTransaction';

const Transactions = () => {
    return(
        <StyledWrapper>
            <StyledPageSubtitle>Transakcje</StyledPageSubtitle>
            <div className="transactionsGrid">
                <SingleTransaction />
                <SingleTransaction />
                <SingleTransaction />
            </div>
        </StyledWrapper>
    );
};

export default Transactions;
import React, { useState } from 'react';

import StyledWrapper from './StyledWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import SingleTransaction from '../../../../components/SingleTransaction/SingleTransaction';

const Transactions = () => {
    const [showArchivedTransactions, setShowArchivedTransactions] = useState(false);

    const togglingTransactions = () => {
        setShowArchivedTransactions((prevValue) => !prevValue);
    };

    return(
        <StyledWrapper>
            <StyledPageSubtitle>Transakcje</StyledPageSubtitle>
            <button onClick={togglingTransactions} className="toggling">{showArchivedTransactions ? 'Pokaż bieżące' : 'Pokaż zarchiwizowane'}</button>
            <div className="transactionsGrid">
                {showArchivedTransactions ?
                <>
                <SingleTransaction archived />
                <SingleTransaction archived />
                <SingleTransaction archived />
                <SingleTransaction archived />
                </>
                :
                <>
                <SingleTransaction />
                <SingleTransaction />
                <SingleTransaction />
                <SingleTransaction />
                </>
                }
            </div>
        </StyledWrapper>
    );
};

export default Transactions;
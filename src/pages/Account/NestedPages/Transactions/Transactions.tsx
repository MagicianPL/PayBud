import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import StyledWrapper from './StyledWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import SingleTransaction from '../../../../components/SingleTransaction/SingleTransaction';
import StyledButton from '../../../../components/StyledButton/StyledButton';

const Transactions = () => {
    const [showArchivedTransactions, setShowArchivedTransactions] = useState(false);

    const togglingTransactions = () => {
        setShowArchivedTransactions((prevValue) => !prevValue);
    };

    return(
        <StyledWrapper>
            <StyledPageSubtitle>Transakcje</StyledPageSubtitle>
            <StyledButton><Link to="/account/transactions/add-transaction">Dodaj transakcję</Link></StyledButton>
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
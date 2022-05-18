import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import StyledWrapper from './StyledWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import SingleTransaction from '../../../../components/SingleTransaction/SingleTransaction';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import useGetTransactions from '../../../../hooks/useGetTransactions';

const Transactions = () => {
    const { getTransactions, fetchingError, transactionsOfSpecificUser } = useGetTransactions();
    const [showArchivedTransactions, setShowArchivedTransactions] = useState(false);

    const togglingTransactions = () => {
        setShowArchivedTransactions((prevValue) => !prevValue);
    };

    useEffect(() => {
        if(transactionsOfSpecificUser === null && !fetchingError) {
            getTransactions();
        }
    }, [getTransactions, fetchingError, transactionsOfSpecificUser]);

    return(
        <StyledWrapper>
            <StyledPageSubtitle>Transakcje</StyledPageSubtitle>

            {/* If transactions of user are fetching n fetchingError is falsy return spinner */}
            {(transactionsOfSpecificUser === null && !fetchingError) &&
            <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color="blue"
            secondaryColor="white" />
            }
            
            {/* If transactions of user are not null so we have array on transactions */}
            {transactionsOfSpecificUser !== null &&
                <>
                <StyledButton><Link to="/account/transactions/add-transaction">Dodaj transakcję</Link></StyledButton>
                <button onClick={togglingTransactions} className="toggling">{showArchivedTransactions ? 'Pokaż bieżące' : 'Pokaż zarchiwizowane'}</button>
                <div className="transactionsGrid">
                    {showArchivedTransactions ?
                    <>
                    {transactionsOfSpecificUser.map((transaction: any) => {
                        if (transaction.isArchived) return <SingleTransaction key={transaction._id} title={transaction.title} amount={transaction.amount} status={transaction.status} notes={transaction.notes} archived />
                        return null
                    })}
                    </>
                    :
                    <>
                    {transactionsOfSpecificUser.map((transaction: any) => {
                        if (!transaction.isArchived) return <SingleTransaction key={transaction._id} title={transaction.title} amount={transaction.amount} status={transaction.status} notes={transaction.notes} />
                        return null
                    })}
                    </>
                    }
                </div>
                </>
            }

            {/* fetchingError is not falsy */}
            {fetchingError &&
            <p>{fetchingError}</p>
            }
        </StyledWrapper>
    );
};

export default Transactions;
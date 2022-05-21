import React, { useEffect } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { Oval } from 'react-loader-spinner';

import StyledWrapper from './StyledWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import useGetTransactions from '../../../../hooks/useGetTransactions';

const Informations = () => {
    const { getTransactions, fetchingError, transactionsOfSpecificUser } = useGetTransactions();
    
    useEffect(() => {
        getTransactions();
    }, [getTransactions]);

    return(
        <StyledWrapper>
            <StyledPageSubtitle>Informacje</StyledPageSubtitle>
            <BsInfoCircle />
            {transactionsOfSpecificUser &&
                <>
                <h2>W tej chwili posiadasz na swoim koncie:</h2>
                <p>Stworzone transakcje: <span>{transactionsOfSpecificUser.length}</span></p>
                <p>W tym zarchiwizowanych: <span>{transactionsOfSpecificUser.filter((transaction: any) => transaction.isArchived === true).length}</span></p>
                <footer>
                    <p>Miłego dnia, <span>MagicianPL!</span></p>
                </footer>
                </>
            }
            {(!fetchingError && !transactionsOfSpecificUser) && <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color="blue"
            secondaryColor="white" />}
            { (fetchingError && !transactionsOfSpecificUser) && <p className="error">{fetchingError}</p> }
        </StyledWrapper>
    );
};

export default Informations;
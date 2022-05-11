import React from 'react';
import { RiInboxArchiveLine } from 'react-icons/ri';

import StyledWrapper from './StyledWrapper';

const SingleTransaction = () => {
    return(
        <StyledWrapper>
            <div className="border"></div>
            <div className="actions">
                <RiInboxArchiveLine title='Zarchiwizuj' />
            </div>
            <p><strong>TileOfTransaction</strong></p>
            <p>Kwota: 245,00 zł</p>
            <p>Notatki (2)</p>
            <p className="payed">Zapłacono</p>
        </StyledWrapper>
    );
};

export default SingleTransaction;
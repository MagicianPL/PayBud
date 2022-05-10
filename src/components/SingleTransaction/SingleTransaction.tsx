import React from 'react';

import StyledWrapper from './StyledWrapper';

const SingleTransaction = () => {
    return(
        <StyledWrapper>
            <div className="border"></div>
            <p><strong>TileOfTransaction</strong></p>
            <p>Kwota: 245,00 zł</p>
            <p>Notatki (2)</p>
            <p className="payed">Zapłacono</p>
        </StyledWrapper>
    );
};

export default SingleTransaction;
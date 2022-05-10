import React from 'react';

import StyledWrapper from './StyledWrapper';

const SingleTransaction = () => {
    return(
        <StyledWrapper>
            <div className="singleTransaction">
                <p>Tytuł: TileOfTransaction</p>
                <p>Kwota: 245,00 zł</p>
                <p>Notatki (2)</p>
                <p>Zapłacono</p>
            </div>
        </StyledWrapper>
    );
};

export default SingleTransaction;
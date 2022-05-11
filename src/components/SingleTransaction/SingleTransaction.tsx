import React from 'react';
import { RiInboxArchiveLine } from 'react-icons/ri';

import StyledWrapper from './StyledWrapper';

interface IProps {
    archived?: boolean
}

const SingleTransaction: React.FC<IProps> = ({ archived }) => {
    return(
        <StyledWrapper>
            <div className="border"></div>
            <div className={`actions ${archived && 'hidden'}`}>
                <RiInboxArchiveLine title='Zarchiwizuj' />
            </div>
            <p><strong>TileOfTransaction</strong></p>
            <p>Kwota: 245,00 zł</p>
            <p>Notatki (2)</p>
            { !archived ?
            <p className="payed">Zapłacono</p>
            :
            <p className="archived">Zarchiwizowano</p>
            }
        </StyledWrapper>
    );
};

export default SingleTransaction;
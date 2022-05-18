import React from 'react';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { BiNote } from 'react-icons/bi';

import StyledWrapper from './StyledWrapper';

interface IProps {
    archived?: boolean
    title: string
    amount?: string
    status: string
    notes: []
}

const SingleTransaction: React.FC<IProps> = ({ archived, title, amount, status, notes }) => {
    return(
        <StyledWrapper>
            <div className="border"></div>
            <div className={`actions ${archived && 'hidden'}`}>
                <BiNote title='Dodaj notatkę' />
                <RiInboxArchiveLine title='Zarchiwizuj' />
            </div>
            <p><strong>{title}</strong></p>
            <p>{amount ? `Kwota: ${amount} zł` : 'Kwota: -'}</p>
            <p>Notatki ({notes.length})</p>
            { !archived ?
            <p className="payed">{status}</p>
            :
            <p className="archived">Zarchiwizowano</p>
            }
        </StyledWrapper>
    );
};

export default SingleTransaction;
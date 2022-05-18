import React from 'react';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { BiNote } from 'react-icons/bi';

import StyledWrapper from './StyledWrapper';
import Modal from '../Modal/Modal';
import useArchiveTransaction from '../../hooks/useArchiveTransaction';

interface IProps {
    archived?: boolean
    title: string
    amount?: string
    status: string
    notes: []
    id: string
}

const SingleTransaction: React.FC<IProps> = ({ archived, title, amount, status, notes, id }) => {
    const { archiveTransaction, showModal, modalError, onModalClick } = useArchiveTransaction();

    return(
        <StyledWrapper>
            <div className="border"></div>
            <div className={`actions ${archived && 'hidden'}`}>
                <BiNote title='Dodaj notatkę' />
                <RiInboxArchiveLine title='Zarchiwizuj' onClick={() => archiveTransaction(id)} />
            </div>
            <p><strong>{title}</strong></p>
            <p>{amount ? `Kwota: ${amount} zł` : 'Kwota: -'}</p>
            <p>Notatki ({notes.length})</p>
            { !archived ?
            <p className="payed">{status}</p>
            :
            <p className="archived">Zarchiwizowano</p>
            }
            { showModal && <Modal modalError={modalError} onClick={onModalClick} />}
        </StyledWrapper>
    );
};

export default SingleTransaction;
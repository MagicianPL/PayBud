import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { BiNote } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';

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
    const navigate = useNavigate();

    const addNote = () => {
        navigate(`/account/notes/add-note?transaction=${id}&title=${title}`);
    };

    const editTransaction = () => {
        navigate(`/account/transactions/add-transaction?transaction=${id}&title=${title}&amount=${amount}&status=${status}`);
    };

    return(
        <StyledWrapper>
            <div className="border"></div>
            <div className={`actions ${archived && 'hidden'}`}>
                <BiNote title='Dodaj notatkę' onClick={addNote} />
                <AiOutlineEdit title="Edytuj" onClick={editTransaction} />
                <RiInboxArchiveLine title='Zarchiwizuj' onClick={() => archiveTransaction(id)} />
            </div>
            <p><strong>{title}</strong></p>
            <p>{amount ? `Kwota: ${amount} zł` : 'Kwota: -'}</p>
            <p><Link to={`/account/notes/oftransaction/${id}`}>Notatki ({notes.length})</Link></p>
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
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';

import StyledAddNoteWrapper from './StyledAddNoteWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import Input from '../../../../components/Input/Input';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import Modal from '../../../../components/Modal/Modal';
import useCreateNote from '../../../../hooks/useCreateNote';

const AddNote = () => {
    const { createNote, showModal, modalMessage, modalError, onModalClick } = useCreateNote();

    //Query Strings Stuff
    const [searchParams] = useSearchParams();
    const transactionId = searchParams.get('transaction');
    const transactionTitle = searchParams.get('title');
    /****************************************************** */

    const [note, setNote] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value);
    };

    return(
        <StyledAddNoteWrapper>
            <StyledPageSubtitle>Dodaj notatkę</StyledPageSubtitle>
            <form onSubmit={(e) => createNote(e, {title: transactionTitle, note, forTransaction: transactionId})}>
            <Input value={note} onChange={handleInputChange} type="textarea" id='content' label="Twoja notatka" className='normal' />
            <p className="withTransaction">Przypięta do transakcji: {transactionId ? transactionId : "BRAK"}</p>
            <StyledButton>Zapisz</StyledButton>
            </form>
            <p className="tip">
                <BsInfoCircle />
                {transactionId ? "Właśnie powiązujesz notatkę z transakcją." : "Przejdź do transakcji i kliknij w ikonę notatki aby powiązać notatkę z transakcją!"}
            </p>
            { showModal && <Modal modalMessage={modalMessage} modalError={modalError} onClick={onModalClick} />}
        </StyledAddNoteWrapper>
    );
};

export default AddNote;
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';

import StyledAddNoteWrapper from './StyledAddNoteWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import Input from '../../../../components/Input/Input';
import StyledButton from '../../../../components/StyledButton/StyledButton';

const AddNote = () => {
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
            <Input value={note} onChange={handleInputChange} type="textarea" id='content' label="Twoja notatka" className='normal' />
            <p className="withTransaction">Przypięta do transakcji: {transactionId ? transactionId : "BRAK"}</p>
            <StyledButton>Zapisz</StyledButton>
            <p className="tip">
                <BsInfoCircle />
                {transactionId ? "Właśnie powiązujesz notatkę z transakcją." : "Przejdź do transakcji i kliknij w ikonę notatki aby powiązać notatkę z transakcją!"}
            </p>
        </StyledAddNoteWrapper>
    );
};

export default AddNote;
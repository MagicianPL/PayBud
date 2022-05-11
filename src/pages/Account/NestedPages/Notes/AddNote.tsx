import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';

import StyledAddNoteWrapper from './StyledAddNoteWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import Input from '../../../../components/Input/Input';
import StyledButton from '../../../../components/StyledButton/StyledButton';

const AddNote = () => {
    return(
        <StyledAddNoteWrapper>
            <StyledPageSubtitle>Dodaj notatkę</StyledPageSubtitle>
            <Input type="textarea" id='content' label="Twoja notatka" className='normal' />
            <p className="withTransaction">Przypięta do transakcji: BRAK</p>
            <StyledButton>Zapisz</StyledButton>
            <p className="tip">
                <BsInfoCircle />
                Przejdź do transakcji i kliknij w ikonę notatki aby powiązać notatkę z transakcją!
            </p>
        </StyledAddNoteWrapper>
    );
};

export default AddNote;
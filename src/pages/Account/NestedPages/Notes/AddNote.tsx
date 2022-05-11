import React from 'react';

import StyledAddNoteWrapper from './StyledAddNoteWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import StyledButton from '../../../../components/StyledButton/StyledButton';

const AddNote = () => {
    return(
        <StyledAddNoteWrapper>
            <StyledPageSubtitle>Dodaj notatkę</StyledPageSubtitle>
        </StyledAddNoteWrapper>
    );
};

export default AddNote;
import React from 'react';

import StyledWrapper from './StyledWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import SingleNote from '../../../../components/SingleNote/SingleNote';

const Notes = () => {
    return(
        <StyledWrapper>
            <StyledPageSubtitle>Twoje notatki</StyledPageSubtitle>
            <StyledButton>Dodaj notatkę</StyledButton>
            <div className="notesGrid">
                <SingleNote />
                <SingleNote />
                <SingleNote />
                <SingleNote />
            </div>
        </StyledWrapper>
    );
};

export default Notes;
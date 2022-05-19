import React from 'react';
import { Link } from 'react-router-dom';

import StyledWrapper from './StyledWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import SingleNote from '../../../../components/SingleNote/SingleNote';

const Notes = () => {
    return(
        <StyledWrapper>
            <StyledPageSubtitle>Twoje notatki</StyledPageSubtitle>
            <StyledButton><Link to="/account/notes/add-note">Dodaj notatkę</Link></StyledButton>
            <div className="notesGrid">
                <p>Notatki...</p>
            </div>
        </StyledWrapper>
    );
};

export default Notes;
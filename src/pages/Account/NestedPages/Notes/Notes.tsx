import React from 'react';

import StyledWrapper from './StyledWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import SingleNote from '../../../../components/SingleNote/SingleNote';

const Notes = () => {
    return(
        <StyledWrapper>
            <StyledPageSubtitle>Twoje notatki</StyledPageSubtitle>
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
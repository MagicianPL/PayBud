import React from 'react';
import { useParams } from 'react-router-dom';

import StyledNotesOfTransaction from './StyledNotesOfTransaction';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import SingleNote from '../../../../components/SingleNote/SingleNote';

const NotesOfTransaction = () => {
    const { transactionId } = useParams();
    console.log(transactionId);
    return(
        <StyledNotesOfTransaction>
            <StyledPageSubtitle>Notatki</StyledPageSubtitle>
            <div className="notesGrid">
                <SingleNote />
                <SingleNote />
                <SingleNote />
                <SingleNote />
            </div>
        </StyledNotesOfTransaction>
    );
};

export default NotesOfTransaction;
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import StyledNotesOfTransaction from './StyledNotesOfTransaction';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import SingleNote from '../../../../components/SingleNote/SingleNote';
import useGetNotesOfTransaction from '../../../../hooks/useGetNotesOfTransaction';

const NotesOfTransaction = () => {
    const { transactionId } = useParams();
    const { getNotesOfTransaction, notes, fetchingError } = useGetNotesOfTransaction();

    //Fetching notes
    useEffect(() => {
        if(transactionId) {
            getNotesOfTransaction(transactionId);
        };
    }, [getNotesOfTransaction, transactionId]);
    
    return(
        <StyledNotesOfTransaction>
            <StyledPageSubtitle>Notatki</StyledPageSubtitle>
            <div className="notesGrid">
                { (notes === null && !fetchingError) && <Oval
                ariaLabel="loading-indicator"
                height={100}
                width={100}
                strokeWidth={5}
                strokeWidthSecondary={1}
                color="blue"
                secondaryColor="white" /> }

                { (notes !== null && !fetchingError) &&
                    notes.map((note: any) => <SingleNote key={note._id} titleOfTransaction={note.forTransaction.title} note={note.note} />)
                }

                { (notes === null && fetchingError) && <p className="error">{fetchingError}</p>}
            </div>
        </StyledNotesOfTransaction>
    );
};

export default NotesOfTransaction;
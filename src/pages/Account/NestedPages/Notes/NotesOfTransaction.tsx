import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import StyledNotesOfTransaction from './StyledNotesOfTransaction';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import SingleNote from '../../../../components/SingleNote/SingleNote';
import useGetNotesOfTransaction from '../../../../hooks/useGetNotesOfTransaction';

const NotesOfTransaction = () => {
    const { transactionId } = useParams();
    const { getNotesOfTransaction, notes, fetchingError } = useGetNotesOfTransaction();
console.log("rendered")
    useEffect(() => {
        if(transactionId) {
            getNotesOfTransaction(transactionId);
        };
    }, [getNotesOfTransaction, transactionId]);
    
    return(
        <StyledNotesOfTransaction>
            <StyledPageSubtitle>Notatki</StyledPageSubtitle>
            <div className="notesGrid">
                { (notes === null && !fetchingError) && <p>Loading</p> }
                { (notes !== null && !fetchingError) &&
                    notes.map((note: any) => <SingleNote key={note._id} />)
                }
                { (notes === null && fetchingError) && <p>{fetchingError}</p>}
            </div>
        </StyledNotesOfTransaction>
    );
};

export default NotesOfTransaction;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import StyledWrapper from './StyledWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import SingleNote from '../../../../components/SingleNote/SingleNote';
import useGetNotesOfUser from '../../../../hooks/useGetAllNotesOfUser';

const Notes = () => {
    const { getNotesOfUser, notes, fetchingError } = useGetNotesOfUser();

    useEffect(() => {
        getNotesOfUser();
    }, [getNotesOfUser]);

    return(
        <StyledWrapper>
            <StyledPageSubtitle>Twoje notatki</StyledPageSubtitle>
            { (notes === null && !fetchingError) &&
                <Oval
                ariaLabel="loading-indicator"
                height={100}
                width={100}
                strokeWidth={5}
                strokeWidthSecondary={1}
                color="blue"
                secondaryColor="white" />
            }

            { (notes !== null && !fetchingError) &&
                <>
                    <StyledButton><Link to="/account/notes/add-note">Dodaj notatkę</Link></StyledButton>
                    <div className="notesGrid">
                    {notes.map((note: any) => <SingleNote titleOfTransaction={note.forTransaction?.title} note={note.note} />)}
                    </div>
                </>
            }

            { (notes === null && fetchingError) &&
                <p className="error">{fetchingError}</p>
            }
        </StyledWrapper>
    );
};

export default Notes;
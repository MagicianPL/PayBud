import React from 'react';
import { useNavigate } from 'react-router';
import { AiOutlineEdit, AiTwotoneDelete } from 'react-icons/ai';

import StyledWrapper from './StyledWrapper';

interface IProps {
    titleOfTransaction?: string
    note: string
    noteId: string
}

const SingleNote: React.FC<IProps> = ({ titleOfTransaction, note, noteId }) => {
    const navigate = useNavigate();

    //Redirect to edit page
    const handleEditNote = () => {
        navigate(`/account/notes/add-note?noteId=${noteId}`);
    };

    return(
        <StyledWrapper>
            <div className="border"></div>
            <div className="actions">
                <AiOutlineEdit title='Edytuj' onClick={handleEditNote} />
                <AiTwotoneDelete className="delete" title='Usuń' />
            </div>
            <p><strong>{titleOfTransaction || 'Brak Tytułu'}</strong></p>
            <p className="content">{note}</p>
        </StyledWrapper>
    );
};

export default SingleNote;
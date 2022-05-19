import React from 'react';
import { useNavigate } from 'react-router';
import { AiOutlineEdit, AiTwotoneDelete } from 'react-icons/ai';

import StyledWrapper from './StyledWrapper';
import useDeleteNote from '../../hooks/useDeleteNote';
import Modal from '../Modal/Modal';

interface IProps {
    titleOfTransaction?: string
    note: string
    noteId: string
}

const SingleNote: React.FC<IProps> = ({ titleOfTransaction, note, noteId }) => {
    const navigate = useNavigate();
    const { deleteNote, showModal, modalMessage, modalError, onModalClick } = useDeleteNote();

    //Redirect to edit page
    const handleEditNote = () => {
        navigate(`/account/notes/add-note?noteId=${noteId}`);
    };

    return(
        <>
        <StyledWrapper>
            <div className="border"></div>
            <div className="actions">
                <AiOutlineEdit title='Edytuj' onClick={handleEditNote} />
                <AiTwotoneDelete className="delete" title='Usuń' onClick={() => deleteNote(noteId)} />
            </div>
            <p><strong>{titleOfTransaction || 'Brak Tytułu'}</strong></p>
            <p className="content">{note}</p>
        </StyledWrapper>
        { showModal && <Modal modalMessage={modalMessage} modalError={modalError} onClick={onModalClick} />}
        </>
    );
};

export default SingleNote;
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { Oval } from 'react-loader-spinner';

import StyledAddNoteWrapper from './StyledAddNoteWrapper';
import StyledPageSubtitle from '../../StyledPageSubtitle';
import Input from '../../../../components/Input/Input';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import Modal from '../../../../components/Modal/Modal';
import useCreateNote from '../../../../hooks/useCreateNote';
import useEditNote from '../../../../hooks/useEditNote';
import useGetNoteForEditing from '../../../../hooks/useGetNoteForEditing';

const AddNote = () => {
    //creating new note
    const { createNote, showModal, modalMessage, modalError, onModalClick } = useCreateNote();
    //patch request for editing
    const { editNote, showModal: edit_showModal, modalMessage: edit_modalMessage, modalError: edit_modalError, onModalClick: edit_onModalClick } = useEditNote();
    //get request for fetching data of edited note
    const { getNote, fetchingError, noteForEditing, loadingNote } = useGetNoteForEditing();

    //Query Strings Stuff
    //FOR NOTE CONNECTED TO TRANSACTION
    const [searchParams] = useSearchParams();
    const transactionId = searchParams.get('transaction');
    const transactionTitle = searchParams.get('title');
    //FOR EDITED NOTE
    const noteId = searchParams.get('noteId');
    /****************************************************** */

    const [note, setNote] = useState("");

    //IF NOTE IS ON EDIT MODE - FETCH DATA AND FILL TEXTAREA
    useEffect(() => {
        if(noteId) {
            getNote(noteId, setNote)
        }
    }, [noteId, getNote]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value);
    };

    return(
        <StyledAddNoteWrapper>
            <StyledPageSubtitle>{!noteId ? "Dodaj notatkę" : "Edytuj"}</StyledPageSubtitle>
            {/*IF WE ARE NOT IN EDITING MODE */}
            { !noteId &&
                <>
                <form onSubmit={(e) => createNote(e, {title: transactionTitle, note, forTransaction: transactionId})}>
                <Input value={note} onChange={handleInputChange} type="textarea" id='content' label="Twoja notatka" className='normal' />
                <p className="withTransaction">Przypięta do transakcji: {transactionId ? transactionId : "BRAK"}</p>
                <StyledButton>Zapisz</StyledButton>
                </form>
                <p className="tip">
                <BsInfoCircle />
                {transactionId ? "Właśnie powiązujesz notatkę z transakcją." : "Przejdź do transakcji i kliknij w ikonę notatki aby powiązać notatkę z transakcją!"}
                </p>
                { showModal && <Modal modalMessage={modalMessage} modalError={modalError} onClick={onModalClick} /> }
                </>
            }

            {/*IF WE ARE IN EDITING MODE */}
            { noteId &&
                <>
                { loadingNote && <div className="loading"><Oval
                ariaLabel="loading-indicator"
                height={100}
                width={100}
                strokeWidth={5}
                strokeWidthSecondary={1}
                color="blue"
                secondaryColor="white" /></div> }

                { (!loadingNote && !fetchingError && noteForEditing) &&
                    <>
                        <form onSubmit={(e) => editNote(e, {note, noteId})}>
                <Input value={note} onChange={handleInputChange} type="textarea" id='content' label="Twoja notatka" className='normal' />
                <p className="withTransaction">Przypięta do transakcji: {noteForEditing.forTransaction ? noteForEditing.forTransaction.toString() : "BRAK"}</p>
                <StyledButton>Zapisz</StyledButton>
                </form>
                <p className="tip">
                <BsInfoCircle />
                {transactionId ? "Właśnie powiązujesz notatkę z transakcją." : "Przejdź do transakcji i kliknij w ikonę notatki aby powiązać notatkę z transakcją!"}
                </p>
                { edit_showModal && <Modal modalMessage={edit_modalMessage} modalError={edit_modalError} onClick={edit_onModalClick} /> }
                    </>
                }

                { (!loadingNote && fetchingError) &&
                    <p className="error">{fetchingError}</p> 
                }
                
                </>
            }
        </StyledAddNoteWrapper>
    );
};

export default AddNote;
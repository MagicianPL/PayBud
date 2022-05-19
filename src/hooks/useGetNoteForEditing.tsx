import { useState, useContext, useCallback } from 'react';
import UserContext from '../context/UserContext';

const useGetNoteForEditing = () => {
    const [loadingNote, setLoadingNote] = useState(true);
    const [noteForEditing, setNoteForEditing] = useState<any>(null);
    const [fetchingError, setFetchingError] = useState("");
    const [user] = useContext(UserContext);

    const getNote = useCallback(
        async (noteId: string, setNote: React.Dispatch<React.SetStateAction<string>>) => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/notes/${noteId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${user.token}`
                },
            });
            const data = await res.json();
    
            if (!res.ok) {
                setFetchingError(data.message);
                setLoadingNote(false);
                return
            };
    
            setNoteForEditing(data);
            setNote(data.note);
            setLoadingNote(false);
        }, [user.token]
    )

    return { getNote, fetchingError, noteForEditing, loadingNote };
};

export default useGetNoteForEditing;
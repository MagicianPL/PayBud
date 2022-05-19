import React from 'react';
import { AiOutlineEdit, AiTwotoneDelete } from 'react-icons/ai';

import StyledWrapper from './StyledWrapper';

interface IProps {
    titleOfTransaction?: string
    note: string
}

const SingleNote: React.FC<IProps> = ({ titleOfTransaction, note }) => {
    return(
        <StyledWrapper>
            <div className="border"></div>
            <div className="actions">
                <AiOutlineEdit title='Edytuj' />
                <AiTwotoneDelete className="delete" title='Usuń' />
            </div>
            {titleOfTransaction && <p><strong>{titleOfTransaction}</strong></p>}
            <p className="content">{note}</p>
        </StyledWrapper>
    );
};

export default SingleNote;
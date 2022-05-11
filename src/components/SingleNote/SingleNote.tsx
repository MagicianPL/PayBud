import React from 'react';
import { AiOutlineEdit, AiTwotoneDelete } from 'react-icons/ai';

import StyledWrapper from './StyledWrapper';

const SingleNote = () => {
    return(
        <StyledWrapper>
            <div className="border"></div>
            <div className="actions">
                <AiOutlineEdit title='Edytuj' />
                <AiTwotoneDelete className="delete" title='Usuń' />
            </div>
            <p><strong>TileOfTransaction</strong></p>
            <p>Jakaś tam notatka bla bla bla i dalej jakiś tekst.</p>
        </StyledWrapper>
    );
};

export default SingleNote;
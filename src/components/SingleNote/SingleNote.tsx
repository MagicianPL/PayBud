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
            <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </StyledWrapper>
    );
};

export default SingleNote;